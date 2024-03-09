'use client';

import { useState, useEffect, useRef } from 'react';
import SignaturePad from 'signature_pad';
import { PageSubTitle } from '@/component/general/PageTitle';

const SectionSignature = () => {
  const signatureRef = useRef(null);
  let signaturePad = {};

  const [formRequest, setFormRequest] = useState({
    file: '',
  });
  const [isEmptyCanvas, setIsEmptyCanvas] = useState(true);

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

  return (
    <section className="container pt-1">
      <form onSubmit={_handleSubmit}>
        <div className="row align-items-center">
          <div className="col">
            <PageSubTitle title="Signature" extraClass="mobile-fs-24" />
          </div>

          <div className="col-auto d-flex justify-content-end mb-4 mb-md-0">
            <button className="btn btn-transparent fs-16 text-blue-300 text-decoration-underline">
              Upload Signature
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="wp-signature">
              <canvas ref={signatureRef} className="signature-canvas"></canvas>

              {isEmptyCanvas ? (
                <div className="canvas-placeholder mobile-fs-24">
                  Draw Signature
                </div>
              ) : null}

              <button
                type="button"
                className="btn btn-primary position-absolute bottom-3 end-3"
                onClick={_handleClear}
              >
                Clear
              </button>
            </div>
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
