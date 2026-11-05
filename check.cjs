const fs=require('fs');
const html=fs.readFileSync(__dirname+'/index.html','utf8');
const ids=[...html.matchAll(/id="([^"]+)"/g)].map(m=>m[1]);
for(const [,ref] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
 if(ref.startsWith('#')){if(!ids.includes(ref.slice(1)))throw Error('Missing anchor: '+ref)}
 else if(!/^(https:|mailto:)/.test(ref)&&!fs.existsSync(__dirname+'/'+ref))throw Error('Missing asset: '+ref);
}
if(new Set(ids).size!==ids.length)throw Error('Duplicate IDs');
const vm=require('vm');let submit;let opened;
const elements={'.menu':{addEventListener(){},getAttribute(){},setAttribute(){}},'#nav':{querySelectorAll(){return[]},classList:{contains(){return false}}},'#year':{},'#brief':{addEventListener(t,f){submit=f}},'#idea':{value:'Quiero una identidad para mi marca & una web.'},'#form-status':{}};
vm.runInNewContext(fs.readFileSync(__dirname+'/script.js','utf8'),{document:{querySelector(s){return elements[s]},addEventListener(){}},Date,encodeURIComponent,window:{open(...args){opened=args}}});
submit({preventDefault(){}});
if(!opened[0].startsWith('https://wa.me/5588996248510?text='))throw Error('Wrong WhatsApp');
if(!decodeURIComponent(opened[0]).includes(elements['#idea'].value))throw Error('Missing message');
opened=null;elements['#idea'].value='   ';submit({preventDefault(){}});if(opened)throw Error('Empty submission opened WhatsApp');
console.log('OK: anchors, local assets, unique IDs, WhatsApp number/message and empty submission.');
