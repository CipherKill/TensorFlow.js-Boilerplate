
//to see the status of loading tensorflow library
 const TensorImportStatus = document.getElementById('status');
 TensorImportStatus.innerText = 'Loaded TensorFlow.js - version: ' + tf.version.tfjs;
 TensorImportStatus.classList.remove('loading');
 TensorImportStatus.classList.add('ready');