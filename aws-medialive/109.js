"use strict";exports.id=109,exports.ids=[109],exports.modules={5109:(e,r,o)=>{o.r(r),o.d(r,{fromProcess:()=>n});var s=o(3054),t=o(8112),i=o(5317),c=o(9023);const n=(e={})=>async()=>{e.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");const r=await(0,s.YU)(e);return(async(e,r,o)=>{const s=r[e];if(!r[e])throw new t.C1(`Profile ${e} could not be found in shared credentials file.`,{logger:o});{const n=s.credential_process;if(void 0===n)throw new t.C1(`Profile ${e} did not contain credential_process.`,{logger:o});{const s=(0,c.promisify)(i.exec);try{const{stdout:o}=await s(n);let t;try{t=JSON.parse(o.trim())}catch{throw Error(`Profile ${e} credential_process returned invalid JSON.`)}return((e,r,o)=>{if(1!==r.Version)throw Error(`Profile ${e} credential_process did not return Version 1.`);if(void 0===r.AccessKeyId||void 0===r.SecretAccessKey)throw Error(`Profile ${e} credential_process returned invalid credentials.`);if(r.Expiration){const o=new Date;if(new Date(r.Expiration)<o)throw Error(`Profile ${e} credential_process returned expired credentials.`)}let s=r.AccountId;return!s&&o?.[e]?.aws_account_id&&(s=o[e].aws_account_id),{accessKeyId:r.AccessKeyId,secretAccessKey:r.SecretAccessKey,...r.SessionToken&&{sessionToken:r.SessionToken},...r.Expiration&&{expiration:new Date(r.Expiration)},...r.CredentialScope&&{credentialScope:r.CredentialScope},...s&&{accountId:s}}})(e,t,r)}catch(e){throw new t.C1(e.message,{logger:o})}}}})((0,s.Bz)(e),r,e.logger)}}};