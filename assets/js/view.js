// File: viewCertificate.js

(function () {
  "use strict";

  /**
   * Function to view certificate based on certificate ID
   * @param {string} certId - ID of the certificate
   */
  function viewCertificate(certId) {
    const urls = {
      mtcna         : 'https://mikrotik.com/training/certificates/c283552c346308462ad1',
      bnsp          : 'https://drive.google.com/file/d/12pkNCYx-EOaIxRB1K2sgHK9skHHClOpU/view?usp=sharing',
      bnspmadya     : 'https://drive.google.com/file/d/1drKuYFDiuDBVUlT6akZsr_oLgRQBxJFU/view?usp=sharing',
      devops        : 'https://skillacademy.com/sertifikat/XS17WZI23OZPW4',
      pcap          : 'https://drive.google.com/file/d/1lCJfyeUhQD8QDKVZtF_l8ya585XITA-A/view?usp=sharing',
      office2016    : 'https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=250&cvid=4uic0pDpCwufi+c014eLLA==',
      ethicalhacker : 'https://drive.google.com/file/d/11ALhh-AAH-cXjgSQHtChRaxLCCOyt3Tb/view?usp=sharing',
      toefl         : 'https://drive.google.com/file/d/1HMb9ycpARhAGCJLOJ4ln1M3OoT6KSklg/view?usp=sharing',
      // Update the '#' URLs with actual certificate links when available.
    };

    if (urls.hasOwnProperty(certId)) {
      if (urls[certId] === '#') {
        alert('Certificate link will be added soon.');
        return;
      }
      window.open(urls[certId], '_blank');
    } else {
      console.error('Certificate ID not found:', certId);
      alert('Certificate not found. Please contact support for assistance.');
    }
  }

  // Make viewCertificate available in global scope
  window.viewCertificate = viewCertificate;
})();
