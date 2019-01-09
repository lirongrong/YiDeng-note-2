report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/rr_1caifu_0_document_0_phone.png",
        "test": "../bitmaps_test/20190109-213815/rr_1caifu_0_document_0_phone.png",
        "selector": "document",
        "fileName": "rr_1caifu_0_document_0_phone.png",
        "label": "1caifu",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://h5.1caifu.com/app/home?timestamp=1487215318389",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "1.60",
          "analysisTime": 22
        },
        "diffImage": "../bitmaps_test/20190109-213815/failed_diff_rr_1caifu_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/rr_1caifu_0_document_1_tablet.png",
        "test": "../bitmaps_test/20190109-213815/rr_1caifu_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "rr_1caifu_0_document_1_tablet.png",
        "label": "1caifu",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://h5.1caifu.com/app/home?timestamp=1487215318389",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -281
          },
          "misMatchPercentage": "0.44",
          "analysisTime": 47
        },
        "diffImage": "../bitmaps_test/20190109-213815/failed_diff_rr_1caifu_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "rr"
});