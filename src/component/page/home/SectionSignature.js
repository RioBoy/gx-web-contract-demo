'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import * as _ from 'lodash';
import * as Icon from 'iconsax-react';
import SignaturePad from 'signature_pad';
import { PageSubTitle } from '@/component/general/PageTitle';
import FormUploadFile from '@/component/form/FormUploadFile';
import Signature from './Signature';

const SectionSignature = () => {
  const signatureRef = useRef(null);
  let signaturePad = {};

  const [formRequest, setFormRequest] = useState({
    file: '',
  });
  const [isEmptyCanvas, setIsEmptyCanvas] = useState(true);

  const [previewFiles, setPreviewFiles] = useState([]);

  const _handleChange = (name, value) => {
    setFormRequest((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const _handleRemove = (index = -1) => {
    const newPreviewFiles = [...previewFiles];

    if (index > -1) {
      newPreviewFiles.splice(index, 1);
      setPreviewFiles(newPreviewFiles);

      _handleChange('file', '');
    }
  };

  const _handleSetPreviewFile = (data = []) => setPreviewFiles(data);

  const resizeCanvas = () => {
    const canvas = signatureRef.current;

    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext('2d').scale(ratio, ratio);
  };

  const _handleClear = () => {
    signaturePad.clear();
    setIsEmptyCanvas(true);
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  useEffect(() => {
    signaturePad = new SignaturePad(signatureRef.current);

    signaturePad.addEventListener('beginStroke', () => {
      setIsEmptyCanvas(false);
    });

    resizeCanvas();
  }, [signaturePad]);

  const UISignature = () =>
    useMemo(
      () => (
        <Signature
          signatureRef={signatureRef}
          isEmptyCanvas={isEmptyCanvas}
          actions={{
            clear: _handleClear,
          }}
          extraClass={!_.isEmpty(previewFiles) ? 'd-none' : 'd-block'}
        />
      ),
      [signatureRef, signaturePad, isEmptyCanvas],
    );

  return (
    <section className="container pt-1">
      <form onSubmit={_handleSubmit}>
        <div className="row align-items-center">
          <div className="col">
            <PageSubTitle title="Signature" extraClass="mobile-fs-24" />
          </div>

          <div className="col-auto d-flex justify-content-end mb-4 mb-md-0">
            <FormUploadFile
              title="Upload Signature"
              name="file"
              value={formRequest.file}
              actions={{
                onChange: (name, value) => _handleChange(name, value),
                handleSetDataPreview: (data) => _handleSetPreviewFile(data),
              }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mb-4">
            {!_.isEmpty(previewFiles) ? (
              <div className="wp-signature-upload">
                {previewFiles.map((vm, idx) => (
                  <div key={idx}>
                    <img src={vm.url} alt={vm.name} />

                    <button
                      type="button"
                      className="btn-circle-icon btn btn-danger-300 text-danger-100 position-absolute top-3 end-3"
                      onClick={() => _handleRemove(idx)}
                    >
                      <Icon.Trash variant="Bold" size="16" />
                    </button>
                  </div>
                ))}
              </div>
            ) : null}

            {UISignature()}
          </div>

          <div className="col-md-12 pt-1 mb-5">
            <PageSubTitle
              title="(Demo Customer Name)"
              extraClass="mobile-fs-24"
            />

            <p className="fs-16 fw-400 mb-0">
              Prepared By. <span className="fw-600">Arbi Mauday</span>, On 08
              January 2024
            </p>
          </div>

          <div className="col-12 col-md-4 offset-md-4 d-grid mt-3">
            <button type="submit" className="btn btn-primary fs-16 fw-500 py-3">
              Apply
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default SectionSignature;
