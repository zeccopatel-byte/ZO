const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

const target = `          <div className="flex flex-col sm:flex-row items-center gap-8">
            <button className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-blue-500/50 to-blue-500/80 rounded-full blur-md opacity-90 transition duration-500 group-hover:opacity-100 group-hover:blur-lg group-hover:to-blue-400/90"></div>
              <div className="relative bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#1d4ed8] text-white font-bold text-[14px] px-8 py-4 rounded-full flex items-center gap-2 uppercase tracking-wider shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] border border-blue-400/30">
                <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="Apple" className="w-[18px] h-[18px] invert" />
                Download <span className="text-lg leading-none">&rarr;</span>
              </div>
            </button>
            <motion.p variants={fadeInUp} className="text-[15px] font-medium text-slate-500">
              No credit card required
            </motion.p>
          </div>
          
              </div>`;

const replacement = `          <div className="flex flex-col sm:flex-row items-center gap-8">
            <button className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-blue-500/50 to-blue-500/80 rounded-full blur-md opacity-90 transition duration-500 group-hover:opacity-100 group-hover:blur-lg group-hover:to-blue-400/90"></div>
              <div className="relative bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#1d4ed8] text-white font-bold text-[14px] px-8 py-4 rounded-full flex items-center gap-2 uppercase tracking-wider shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] border border-blue-400/30">
                <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="Apple" className="w-[18px] h-[18px] invert" />
                Download <span className="text-lg leading-none">&rarr;</span>
              </div>
            </button>
            <motion.p variants={fadeInUp} className="text-[15px] font-medium text-slate-500">
              No credit card required
            </motion.p>
          </div>
          
          <motion.div variants={fadeInUp} className="flex items-center gap-8 mt-12 opacity-60 mix-blend-multiply filter grayscale hover:grayscale-0 transition-all duration-300">
            <img src="/stripe-3.svg" alt="Stripe" className="h-8 object-contain" />
            <img src="/substack_wordmark.png" alt="Substack" className="h-6 object-contain" />
          </motion.div>
          
              </div>`;

code = code.replace(target, replacement);
fs.writeFileSync('src/App.tsx', code);
