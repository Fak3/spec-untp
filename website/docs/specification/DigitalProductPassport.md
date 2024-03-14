---
sidebar_position: 5
title: Digitial Product Passport
---

import Disclaimer from '../\_disclaimer.mdx';

<Disclaimer />

## Overview

The digital product passport (DPP) is issued by the shipper of goods and is the carrier of **product and sustainability information** for every serialised product item (or product batch) that is shipped between actors in the value chain. It is deliberately **simple and lightweight** and is designed to carry the minimum necessary data at the **granularity** needed by the receiver of goods - such as the scope 3 emissions in a product shipment. The passport contains links to **conformity credentials** which add trust to the ESG claims in the passport. The passport also contains links to **traceability events** which provide the "glue" to follow the linked-data trail (subject to confidentiality constraints) from finished product back to raw materials. The UNTP DPP does not conflict with national regulations such as the EU DPP. In fact, it can usefully be conceptualised as the **upstream B2B feedstock** that provides the data and evidence needed for the issuing of high quality national level product passports.

## Conceptual Model

![Digital Product passport conceptual model](DigitalProductPassport.png)

## Logical Model & Schema

![Digital Product Passport data model](DigitalProductPassport.svg)

**[Browsable data model documentation](https://jargon.sh/user/unece/DigitalProductPassport/v/working/artefacts/readme/render)**

**[JSON-LD @context file](https://jargon.sh/user/unece/DigitalProductPassport/v/working/artefacts/jsonldContexts/ProductPassport.jsonld?class=ProductPassport)**

**[JSON Schema](https://jargon.sh/user/unece/DigitalProductPassport/v/working/artefacts/jsonSchemas/render.json?class=ProductPassport)**

**[Browsable API documentation](https://jargon.sh/redoc.html?url=/user/unece/DigitalProductPassport/v/working/artefacts/openapi/render.json)**

## Sample File

Sample DPP JSON for a packaged meat product. Includes render template. [Human browsable rendered version](https://web.agtrace.showthething.com/verify?q=%7B%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fagtrace-processor-verifiable-credentials.s3.ap-southeast-2.amazonaws.com%2F9359502000041%2F14713cf0-b81c-497c-a633-985cbb4bd5c4.json%22%7D%7D)

```
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/vc-revocation-list-2020/v1",
    "https://w3id.org/security/suites/jws-2020/v1",
    "https://vckit-contexts.s3.ap-southeast-2.amazonaws.com/dev-render-method-context.json",
    "https://dpp-json-ld.s3.ap-southeast-2.amazonaws.com/dppld.json",
    "https://w3id.org/security/suites/jws-2020/v1"
  ],
  "type": [
    "VerifiableCredential",
    "ProductPassportCredential"
  ],
  "issuer": {
    "id": "did:web:processor.agtrace.showthething.com"
  },
  "credentialSubject": {
    "product": {
      "productId": "9359502000041",
      "productClass": "Beef Silverside",
      "weight": "500 grams",
      "image": "https://gs1ausaactivateprod1.blob.core.windows.net/935950200000/09359502000041/AgTace-Meats-Silverside.png?sv=2019-07-07&sr=c&si=read&sig=1b9unDt%2FV7M0jCuNIbn47AaES0XK%2FOgL6QbRcuBGPOw%3D",
      "description": "Deforestation-free Beef Silverside",
      "manufacturer": {
        "id": "https://agtraceprocessors.com.au/",
        "name": "Pete's Meats"
      }
    },
    "batch": {
      "batchId": "5698754215",
      "manufacturedAt": {
        "id": "https://resolver.showthething.com/414/9377779541302",
        "name": "name",
        "operatedBy": {
          "id": "https://agtraceprocessors.com.au/",
          "name": "AgTrace Processors"
        }
      },
      "manufacturedDate": "Tue Jan 09 2024",
      "provenance": [
        {
          "country": "AU",
          "percentage": 100
        }
      ],
      "sustainabilityInfo": [
        {
          "Topic": "environment.deforestation",
          "Criteria": "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32023R1115",
          "Evidence": "https://web.agtrace.showthething.com/verify?q=%7B%22payload%22%3A%20%7B%22uri%22%3A%22https%3A%2F%2Fagtrace-verifiable-credentials.s3.ap-southeast-2.amazonaws.com%2Fprocessor-df-cert.json%22%7D%7D",
          "metric": [
            {
              "Metric": "Canopy cover reduction",
              "Unit": "% per km^2",
              "Value": 0
            }
          ],
          "compliance": true
        }
      ],
      "traceabilityInfo": [
        {
          "EventReference": "https://processor.dlr.agtrace.showthething.com/gtin/9359502000041/3101/000001/13/240109/21/12578901?linkType=gs1:epcis",
          "EventType": "transformation"
        }
      ]
    },
    "sustainabilityScore": 65,
    "trustScore": 48
  },
  "render": [
    {
      "template": "<div style='max-width: 400px; padding: 20px; background-color: #913831'> <div style='display: flex; justify-content: center; width: 100%; margin: 0 auto 20px auto; font-weight: bold;' > <img style='width: 40px; height: 40px; border-radius: 50%; margin-bottom: 20px' src='data:image/jpeg;base64, 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' /> <p style='color: #ffffff'>Pete's Meats</p> </div> <div style=' display: flex; justify-content: space-between; '> <div style=' color: #fff; text-align: center; flex: 1; '> <p style='font-weight: bold;'> {{credentialSubject.sustainabilityScore}}% </p> Sustainability <br /> Score </div> <img src='{{credentialSubject.product.image}}' style=' border-radius: 50%; height: 100px; flex: 1; ' /> <div style=' color: #fff; text-align: center; flex: 1; '> <p style='font-weight: bold;'> {{credentialSubject.trustScore}}% </p> Confidence <br /> Level </div> </div> <div style='background-color: white; border-radius: 8px; padding: 16px; margin-top: 32px;' > <div style=' text-align: left; font-weight: bold; padding-top: 6px; padding-bottom: 6px;' >Product Information</div> <table style='border-collapse: collapse;'> <tr style='border-bottom: 1px solid #e3eff2;'> <td style='padding-top: 6px; padding-bottom: 6px; color: #2b2d2e; text-align: start;' >Manufacturer</td> <td style='text-align: end; color: #778180' >{{credentialSubject.product.manufacturer.name}}</td> </tr> <tr style='border-bottom: 1px solid #e3eff2;'> <td style='padding-top: 6px; padding-bottom: 6px; color: #2b2d2e; text-align: start;' >Type</td> <td style='text-align: end; color: #778180' >{{credentialSubject.product.productClass}} </td> </tr> <tr style='border-bottom: 1px solid #e3eff2;'> <td style='padding-top: 6px; padding-bottom: 6px; color: #2b2d2e; text-align: start;' >GTIN</td> <td style='text-align: end; color: #778180'> {{credentialSubject.product.productId}}</td> </tr> <tr style='border-bottom: 1px solid #e3eff2;'> <td style='padding-top: 6px; padding-bottom: 6px; color: #2b2d2e; text-align: start;' >Manuf. Date</td> <td style='text-align: end; color: #778180' >{{credentialSubject.batch.manufacturedDate}}</td> </tr> <tr style='border-bottom: 1px solid #e3eff2;'> <td style='padding-top: 6px; padding-bottom: 6px; color: #2b2d2e; text-align: start;' >Batch No.</td> <td style='text-align: end; color: #778180' >{{credentialSubject.batch.batchId}}</td> </tr> <tr style='border-bottom: 1px solid #e3eff2;'> <td style='padding-top: 6px; padding-bottom: 6px; color: #2b2d2e; text-align: start;' >Weight</td> <td style='text-align: end; color: #778180' >{{credentialSubject.product.weight}}</td> </tr> <tr style='border-bottom: 1px solid #e3eff2;'> <td style='padding-top: 6px; padding-bottom: 6px; color: #2b2d2e; text-align: start;' >Description</td> <td style='text-align: end; color: #778180' >{{credentialSubject.product.description}}</td> </tr> </table> </div> <div style='background-color: white; border-radius: 8px; padding: 16px; margin-top: 32px;' > <div style=' text-align: left; font-weight: bold; padding-top: 6px; padding-bottom: 6px;' >Origin Information</div> <div style='display: flex; margin-top: 8px; flex-direction: row; '> <div style='flex: 1'> {{#each credentialSubject.batch.provenance}} <div style='display: flex; align-items: center;'> <div style='font-weight: bold; color: #161618' >{{this.country}}</div> <div style='margin-left: 16px;'>{{this.percentage}}%</div> </div> {{/each}} </div> </div> </div> <div style=' background-color: white; border-radius: 8px; padding: 16px; margin-top: 32px; ' > <div style=' text-align: left; font-weight: bold; padding-top: 6px; padding-bottom: 6px; ' > Sustainability Information </div> {{#each credentialSubject.batch.sustainabilityInfo}} <div style='display: flex; margin-top: 8px; flex-direction: row'> <div style='flex: 1'> <div style='display: flex; align-items: center'> <div style='font-weight: bold; color: #161618'>{{this.Topic}}:</div> <div style='margin-left: 16px'> {{this.metric.0.Value}}&nbsp{{this.metric.0.Unit}} </div> </div> <div style='display: flex; align-items: center'> <div style='font-weight: bold; color: #161618'>Evidence:</div> <div style='margin-left: 16px'> <a href='{{this.Evidence}}'>Link</a> </div> </div> </div> </div> {{/each}} </div> <div style=' background-color: white; border-radius: 8px; padding: 16px; margin-top: 32px; ' > <div style=' text-align: left; font-weight: bold; padding-top: 6px; padding-bottom: 6px; ' > Traceability Information </div> {{#each credentialSubject.batch.traceabilityInfo}} <div style='display: flex; margin-top: 8px; flex-direction: row'> <div style='flex: 1'> <div style='display: flex; align-items: center'> <div style='font-weight: bold; color: #161618'>Event:</div> <div style='margin-left: 16px'> <a href='{{this.EventReference}}'>Link</a> </div> </div> <div style='display: flex; align-items: center'> <div style='font-weight: bold; color: #161618'>Event Type:</div> <div style='margin-left: 16px'> {{this.EventType}} </div> </div> </div> </div> {{/each}} </div></div>",
      "@type": "WebRenderingTemplate2022"
    }
  ],
  "credentialStatus": {
    "id": "https://api.vckit.showthething.com/credentials/status/revocation-list-2020/did_web_processor.agtrace.showthething.com/66",
    "type": "BitstringStatusListEntry",
    "revocationListIndex": 4,
    "revocationListCredential": "https://api.vckit.showthething.com/credentials/status/revocation-list-2020/did_web_processor.agtrace.showthething.com/66"
  },
  "issuanceDate": "2024-01-09T08:28:37.144Z",
  "proof": {
    "type": "JsonWebSignature2020",
    "created": "2024-01-09T08:28:37Z",
    "verificationMethod": "did:web:processor.agtrace.showthething.com#7dfafe8a248c42c1eb9f8f549cc85ca24cd1d1764a31cf726504c5667396dba2-key-0",
    "proofPurpose": "assertionMethod",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..ELbpu5IR0zeXdktOSNO8jffdewDRoKPcVcPDtC-c_Scj6uBrUZv-T0VvM1FAtjXs1ClJS5hDpYs9_SrA0Br4CA"
  }
}
```