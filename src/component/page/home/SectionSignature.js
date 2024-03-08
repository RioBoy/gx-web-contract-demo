'use client';

import { useState, useEffect } from 'react';
import SignaturePad from 'signature_pad';
import { PageSubTitle } from '@/component/general/PageTitle';

const SectionSignature = () => {
  const [formRequest, setFormRequest] = useState({
    file: '',
  });
  const [isEmptyCanvas, setIsEmptyCanvas] = useState(true);

  const resizeCanvas = () => {
    const canvas = document.getElementById('signature-canvas');

    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext('2d').scale(ratio, ratio);
  };

  const _handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  useEffect(() => {
    const canvas = document.querySelector('canvas');
    const signaturePad = new SignaturePad(canvas);

    signaturePad.addEventListener(
      'beginStroke',
      () => {
        setIsEmptyCanvas(false);
      },
      { once: true },
    );

    resizeCanvas();
  }, []);

  return (
    <section className="container pt-1">
      <form onSubmit={_handleSubmit}>
        <div className="row align-items-center">
          <div className="col-md-6">
            <PageSubTitle title="Signature" />
          </div>

          <div className="col-md-6 d-flex justify-content-end">
            <button className="btn btn-transparent fs-16 text-blue-300 text-decoration-underline">
              Upload Signature
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="wp-signature">
              <canvas
                id="signature-canvas"
                className="signature-canvas"
              ></canvas>

              {isEmptyCanvas ? (
                <div className="canvas-placeholder">Draw Signature</div>
              ) : null}
            </div>
          </div>

          <div className="col-md-12 pt-1 mb-5">
            <PageSubTitle title="(Demo Customer Name)" />

            <p className="fs-16 fw-400 mb-0">
              Prepared By. <span className="fw-600">Arbi Mauday</span>, On 08
              January 2024
            </p>
          </div>

          <div className="col-md-4 offset-4 d-grid mt-3">
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
