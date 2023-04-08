/****************************************************
 *
 *  stats.js
 *  ---------------------------------------------------------------------
 *
 *  Made by ramneek narayan, feel free to adapt to your own needs and add or remove macros
 *  what's given is a list of macros for statistics, mathematics, and colours...
 *
 *
 */


MathJax.Hub.Register.StartupHook("TeX Jax Ready", function () {
  MathJax.InputJax.TeX.Definitions.Add({
    macros: {
      card: ["Macro", "\\text{card}\\left( #1 \\right)", 1],
      ind: ["Macro", "\\perp\\!\\!\\!\\perp"],
      nind: ["Macro", "\\perp\\! \\! \\! \\perp \\! \\! \\! \\! \\! \\!/ \\ \\"],
      cov: ["Macro", "\\text{Cov}\\left( #1 \\right )", 1],
      sample: ["Macro", "#1_1,...,#1_{#2}", 2],
      P: ["Macro", "\\mathbb{P}\\left( #1 \\right)", 1],
      E: ["Macro", "\\mathbb{E}\\left( #1 \\right)", 1],
      I: ["Macro", "\\mathcal{I}\\left( #1 \\right)", 1],
      R: ["Macro", "\\mathbb{R}"],
      Nat: ["Macro", "\\mathbb{N}"],
      C: ["Macro", "\\mathbb{C}"],
      Q: ["Macro", "\\mathbb{Q}"],
      Z: ["Macro", "\\mathbb{Z}"],
      H: ["Macro", "\\mathbb{H}"],
      O: ["Macro", "\\mathbb{O}"],
      S: ["Macro", "\\mathbb{S}"],
      impl: ["Macro", "\\Rightarrow"],
      as: ["Macro", "\\equiv"],
      up: ["Macro", "\\lvert"],
      bigup: ["Macro", "\\bigg\\lvert"],
      Var: ["Macro", "\\text{Var}\\left ( #1 \\right)", 1],
      lset: ["Macro", "\\lbrace"],
      rset: ["Macro", "\\rbrace"],
      set: ["Macro", "\\left \\lbrace #1 \\right \\rbrace", 1],
      sor: ["Macro", "\\cup"],
      sand: ["Macro", "\\cap"],
      cor: ["Macro", "\\text{Corr}\\left( #1 \\right)", 1],
      Li: ["Macro", "\\mathcal{L}\\left ( #1 \\right )", 1],
      li: ["Macro", "\\ell \\left ( #1 \\right)", 1],
      add: ["Macro", "#1_{1} + \\dots + #1_{#2}", 2],
      mult: ["Macro", "#1_1#1_2\\dots#1_{#2}", 2],
      mpdv: ["Macro", "\\frac{\\partial^{#1}{#2}}{\\partial #3^{#1}}", 3],
      mdv: ["Macro", "\\frac{d^{#1}{#2}}{d #3^{#1}}", 3],
      mfdv: ["Macro", "\\frac{\\delta^{#1}{#2}}{\\delta #3^{#1}}", 3],
      bs: ["Macro", "\\sum_{#1 = #2}^{#3}", 3],
      bel: ["Macro", "\\underbrace{#1}_{#2}", 2],
      bern: ["Macro", "\\text{Bern}"],
      bernd: ["Macro", "#2^{#1}\\left(1 - #2\\right)^{1 - #1}", 2],
      bernex: ["Macro", "#1", 1],
      bernvar: ["Macro", "#1\\left(1 - #1\\right)", 1],
      bernmgf: ["Macro", "#2e^{#1} + \\left(1 - #2\\right)", 2],
      Bin: ["Macro", "\\text{Bin}"],
      Bind: ["Macro", "\\binom{#2}{#1} {#3}^{#1}\\left(1 - #3\\right)^{#2 - #1}", 3],
      Binex: ["Macro", "#1(#2)", 2],
      Binvar: ["Macro", "#1(#2)\\left(1 - #2\\right)", 2],
      Binmgf: ["Macro", "\\left[#3e^{#1} (1 - #3)\\right]^{#2}", 3],
      Bincd: ["Macro", "I_{1 - #3}\\left(#2 - #1, 1 + #1\\right)", 3],
      dunif: ["Macro", "U"],
      dunifd: ["Macro", "\\frac{1}{#1}", 1],
      dunifex: ["Macro", "\\frac{#1 + 1}{2}", 1],
      dunifvar: ["Macro", "\\frac{\\left(#1 + 1\\right)\\left(#1 - 1\\right)}{12}", 1],
      dunifmgf: ["Macro", "\\frac{1}{#2}\\sum_{i = 1}^{#2}e^{i#1}", 2],
      dunifcd: ["Macro", "\\frac{#1}{N}", 1],
      geom: ["Macro", "\\text{Geom}"],
      geomd: ["Macro", "#2\\left(1 - #2\\right)^{#1 - 1}", 2],
      geomex: ["Macro", "\\frac{1}{#1}", 1],
      geomvar: ["Macro", "\\frac{1 - #1}{#1^2}", 1],
      geommgf: ["Macro", "\\frac{#2e^{#1}}{1 - \\left(1 - #2\\right)e^{#1}}", 2],
      geocd: ["Macro", "1 - (1 - #2)^{#1 + 1}", 2],
      hypgeo: ["Macro", "\\text{HypGeo}"],
      hypgeod: ["Macro", "\\frac{\\binom{#2}{#1}\\binom{#2 - #3}{#4 - #1}}{\\binom{#2}{#4}}", 4],
      hypgeoex: ["Macro", "\\frac{#3#2}{#1}", 3],
      hypgeovar: ["Macro", "\\frac{#3#2}{#1}\\frac{\\left(#1 - #2\\right)\\left(#1 - #3\\right)}{#1\\left(#1 - 1\\right)}", 3],
      nbin: ["Macro", "\\text{NegBin}"],
      nbind: ["Macro", "\\binom{#2 + #1 - 1}{#1}\\left(1 - #3\\right)^{#2}#3^{#1}", 3],
      nbinex: ["Macro", "\\frac{#1#2}{\\left(1 - #2\\right)}", 2],
      nbinvar: ["Macro", "\\frac{#1#2^2}{\\left(1 - #2\\right)}", 2],
      nbinmgf: ["Macro", "\\left(\\frac{\\left(1 - #3\\right)}{1 - #3e^{#1}}\\right)^{#2}", 3],
      nbincd: ["Macro", "1 - I_{#3}\\left(#1 + 1, #2\\right)", 3],
      pois: ["Macro", "\\text{Pois}"],
      poisd: ["Macro", "\\frac{e^{-#2}#2^{#1}}{#1!}", 2],
      poisex: ["Macro", "#1", 1],
      poisvar: ["Macro", "#1", 1],
      poismgf: ["Macro", "e^{#2\\left(e^{#1} - 1\\right)}", 2],
      poiscd: ["Macro", "e^{-#2}\\sum_{i = 0}^{\\lfloor{k}\\rfloor}\\frac{#2^i}{i!}", 2],
      Beta: ["Macro", "\\text{Beta}"],
      Betad: ["Macro", "\\frac{\\Gamma\\left({#2}\\right)\\Gamma\\left({#3}\\right)}{\\Gamma\\left({#2 + #3}\\right)} #1^{#2 - 1}\\left(1 - #1\\right)^{#3 - 1}", 3],
      Betaex: ["Macro", "\\frac{#1}{#1 + #2}", 2],
      Betavar: ["Macro", "\\frac{#1#2}{\\left(#1 + #2\\right)^2 \\left(#1 + #2 + 1\\right)}", 2],
      Betamgf: ["Macro", "1 + \\sum_{k = 0}^{\\infty} \\prod_{r = 0}^{k - 1}\\left(\\frac{#2 + r}{#2 + #3 + r}\\right)\\frac{#1^{k}}{k!}", 3],
      Betacd: ["Macro", "I_{#1}(#2, #3)", 3],
      cauchy: ["Macro", "\\text{Cauchy}"],
      cauchyd: ["Macro", "\\frac{1}{\\pi#3} \\frac{1}{1 + \\left(\\frac{#1 - #2}{#3}\\right)^2}", 3],
      cauchycd: ["Macro", "\\frac{1}{\\pi}\\arctan\\left(\\frac{#1 - #2}{#3}\\right) + \\frac{1}{2}", 3],
      chisq: ["Macro", "\\chi^2_{#1}", 1],
      chisqd: ["Macro", "\\frac{1}{\\Gamma\\left(#2/2\\right)2^{#2/2}}#1^{\\left(#2/2\\right) - 1}e^{-#1/2}", 2],
      chisqex: ["Macro", "#1", 1],
      chisqvar: ["Macro", "2#1", 1],
      chisqmgf: ["Macro", "\\left(\\frac{1}{1 - 2#1}\\right)^{#2/2}", 2],
      chisqcd: ["Macro", "\\frac{1}{\\Gamma\\left(#2/2\\right)}\\gamma\\left(\\frac{#2}{2}, \\frac{#1}{2}\\right)", 2],
      dexp: ["Macro", "\\text{DExp}"],
      dexpd: ["Macro", "\\frac{1}{2#3}e^{-\\left(\\frac{\\abs{#1 - #2}}{#3}\\right)}", 3],
      dexpex: ["Macro", "#1", 1],
      dexpvar: ["Macro", "2#1^2", 1],
      dexpmgf: ["Macro", "\\frac{e^{#2#1}}{1 - \\left(#3#1\\right)^{2}}", 3],
      expo: ["Macro", "\\text{Exp}"],
      expod: ["Macro", "\\frac{1}{#2}e^{\\frac{-#1}{#2}}", 2],
      expoex: ["Macro", "#1", 1],
      expovar: ["Macro", "#1^2", 1],
      expomgf: ["Macro", "\\frac{1}{1 - #2#1}", 2],
      expocd: ["Macro", "1 - e^{-#2#1}", 2],
      F: ["Macro", "{F}"],
      Fd: ["Macro", "\\frac{\\Gamma\\left(\\frac{#2 + #3}{2}\\right)}{\\Gamma\\left(\\frac{#2}{2}\\right)\\Gamma\\left(\\frac{#3}{2}\\right)} \\left(\\frac{#2}{#3}\\right)^{#2/2}\\frac{#1^{\\left(#2 - 1\\right)/2}}{\\left(1 + \\left(\\frac{#2}{#3}#1\\right)\\right)^{\\left(#2 + #3\\right)/2}}", 3],
      Fex: ["Macro", "\\frac{#1}{#1 - 2}", 1],
      Fvar: ["Macro", "2\\left(\\frac{#2}{#2 - 2}\\right)\\frac{\\left(#1 + #2 - 2\\right)}{#1(#2- 4)}", 2],
      Fnm: ["Macro", "\\frac{\\Gamma\\left(\\frac{#2 + 2(#1)}{2}\\right)\\Gamma\\left(\\frac{#3 - 2(#1)}{2}\\right)}{\\Gamma\\left(\\frac{#2}{2}\\right)\\Gamma\\left(\\frac{#3}{2}\\right)}\\left(\\frac{#3}{#2}\\right)^{#1}", 3],
      gam: ["Macro", "\\text{Gam}"],
      gamd: ["Macro", "\\frac{#3^{#2}}{\\Gamma\\left({#2}\\right)} #1^{#2 - 1}e^{-#3#1}", 3],
      gamex: ["Macro", "\\frac{#1}{#2}", 2],
      gamvar: ["Macro", "\\frac{#1}{#2^2}", 2],
      gammgf: ["Macro", "\\left(1 - \\frac{#1}{#3}\\right)^{-#2}", 3],
      gamcd: ["Macro", "\\frac{\\gamma\\left(#2, #3#1\\right)}{\\Gamma(#2)}", 3],
      logis: ["Macro", "\\text{Logis}"],
      logisd: ["Macro", "\\frac{1}{#3}\\frac{e^{-\\left(#1 - #2\\right)/#3}}{\\left[1 + e^{-\\left(#1 - #2\\right)/#3}\\right]^2}", 3],
      logisex: ["Macro", "#1", 1],
      logisvar: ["Macro", "\\frac{\\pi^2#1^2}{3}", 1],
      logismgf: ["Macro", "e^{#2#1}\\Gamma\\left(1 - #3#1\\right)\\Gamma\\left(1 + #3#1\\right)", 3],
      logiscd: ["Macro", "\\frac{1}{1 + e^{-\\left(#1 - #2\\right)/#3}}", 3],
      lognorm: ["Macro", "\\text{LogNorm}"],
      lognormd: ["Macro", "\\frac{1}{\\sqrt{2\\pi}#3}\\frac{e^{-\\left(\\log(#1) - #2)^2/(2#3^2\\right)}}{#1}", 3],
      lognormex: ["Macro", "e^{#1 + \\left(#2^2/2\\right)}", 2],
      lognormvar: ["Macro", "e^{2\\left(#1 + #2^2\\right)} - e^{2#1 + #2^2}", 2],
      lognormnm: ["Macro", "e^{#1#2 + #1^2#3^2/2}", 3],
      lognormcd: ["Macro", "\\frac{1}{2} + \\frac{1}{2}\\text{erf}\\left(\\frac{\\log\\left(#1\\right) - #2}{\\sqrt{2}#3}\\right)", 3],
      N: ["Macro", "\\mathcal{N}"],
      Nd: ["Macro", "\\frac{1}{\\sqrt{2\\pi}#3}e^{-\\left(\\frac{(#1 - #2)}{2#3}\\right)^2}", 3],
      Nex: ["Macro", "#1", 1],
      Nvar: ["Macro", "#1^2", 1],
      Nmgf: ["Macro", "e^{#2#1 + #3^2#1^2/2}", 3],
      Ncd: ["Macro", "\\frac{1}{2}\\left[1 + \\text{erf}\\left(\\frac{#1 - #2}{#3\\sqrt{2}}\\right)\\right]", 3],
      paret: ["Macro", "\\text{Pareto}"],
      paretd: ["Macro", "\\frac{#3#2^{#3}}{#1^{#3 + 1}}", 3],
      paretex: ["Macro", "\\frac{#2#1}{#2 -1}", 2],
      paretvar: ["Macro", "\\frac{#2#1^2}{\\left(#2 - 1\\right)^2\\left(#2 - 2\\right)}", 2],
      paretcd: ["Macro", "1 - \\left(\\frac{#2}{#1}\\right)^{#3}", 3],
      td: ["Macro", "\\frac{\\Gamma\\left(\\frac{#2 + 1}{2}\\right)}{\\Gamma\\left(\\frac{#2}{2}\\right)}\\frac{1}{\\sqrt{#2\\pi}}\\frac{1}{\\left(1 + \\left(\\frac{#1^2}{#2}\\right)\\right)^{(#2 + 1)/2}}", 2],
      texp: ["Macro", "0"],
      tvar: ["Macro", "\\frac{#1}{#1 - 2}", 1],
      tnm: ["Macro", "\\frac{\\Gamma\\left(\\frac{#1 + 1}{2}\\right)\\Gamma\\left(\\frac{#2 - #1}{2}\\right)}{\\sqrt{\\pi}\\Gamma\\left(\\frac{#2}{2}\\right)}#2^{#1/2}", 2],
      unif: ["Macro", "U"],
      unifd: ["Macro", "\\frac{1}{#2 - #1}", 2],
      unifex: ["Macro", "\\frac{#2 + #1}{2}", 2],
      unifvar: ["Macro", "\\frac{\\left(#2 - #1\\right)^2}{12}", 2],
      unifmgf: ["Macro", "\\frac{e^{#3#1} - e^{#2#1}}{\\left(#3 - #2\\right)#1}", 3],
      unifcd: ["Macro", "\\frac{#1 - #2}{#3 - #2}", 3],
      weib: ["Macro", "\\text{Weibull}"],
      weibd: ["Macro", "\\frac{#2}{#3}#1^{#2 - 1}e^{-#1^{#2}/#3}", 3],
      weibex: ["Macro", "#2^{1/#1}\\Gamma\\left(1 + \\frac{1}{#1}\\right)", 2],
      weibvar: ["Macro", "#2^{2/#1}\\left[\\Gamma\\left(1 + \\frac{2}{#1}\\right)- \\Gamma^2\\left(1 + \\frac{1}{#1}\\right)\\right]", 2],
      weibnm: ["Macro", "#3^{#1/#2}\\Gamma\\left(1 + \\frac{#1}{#2}\\right)", 3],
      weibcd: ["Macro", "1 - e^{-(#1^{#3}/#2)}", 3],
      mode: ["Macro", "\\text{Mode}"],
      med: ["Macro", "\\text{Median}"],
      tqt: ["Macro", "Q_{3}"],
      iqr: ["Macro", "IQR"],
      qt: ["Macro", "{#1}_{#2}", 2],
      Min: ["Macro", "\\text{Min}"],
      Max: ["Macro", "\\text{Max}"],
      mx: ["Macro", "\\max \\left \\lbrace #1 \\right \\rbrace", 1],
      mn: ["Macro", "\\min \\left \\lbrace #1 \\right \\rbrace", 1],
      evl: ["Macro", "\\bigg \\lvert"],
      ord: ["Macro", "{#1}_{(#2)}", 2],
      distas: ["Macro", "\\stackrel{#1}{\\sim}", 1],
      fqt: ["Macro", "Q_1"],
      evals: ["Macro", "#1 \\left \\lvert", 1],
      erf: ["Macro", "\\frac{2}{\\sqrt{\\pi}}\\int_{0}^{#1}e^{-t^2}dt", 1],
      al: ["Macro", "\\alpha"],
      be: ["Macro", "\\beta"],
      ga: ["Macro", "\\gamma"],
      de: ["Macro", "\\delta"],
      ep: ["Macro", "\\epsilon"],
      ze: ["Macro", "\\zeta"],
      ta: ["Macro", "\\theta"],
      io: ["Macro", "\\iota"],
      kap: ["Macro", "\\kappa"],
      lam: ["Macro", "\\lambda"],
      omc: ["Macro", "\\omicron"],
      ups: ["Macro", "\\upsilon"],
      om: ["Macro", "\\omega"],
      sig: ["Macro", "\\sigma"],
      Ga: ["Macro", "\\Gamma"],
      De: ["Macro", "\\Delta"],
      Ta: ["Macro", "\\Theta"],
      Lam: ["Macro", "\\Lambda"],
      Ups: ["Macro", "\\Upsilon"],
      Om: ["Macro", "\\Omega"],
      Sig: ["Macro", "\\Sigma"],
      orange: ["Macro", "{\\color{orange} #1}", 1],
      brown: ["Macro", "{\\color{brown} #1}", 1],
      blue: ["Macro", "{\\color{blue} #1}", 1],
      green: ["Macro", "{\\color{green} #1}", 1],
      purple: ["Macro", "{\\color{purple} #1}", 1],
      red: ["Macro", "{\\color{red} #1}", 1],
      pink: ["Macro", "{\\color{pink} #1}", 1],
      gray: ["Macro", "{\\color{gray} #1}", 1],
      black: ["Macro", "{\\color{black} #1}", 1]
    }
  });
});

MathJax.Ajax.loadComplete("{{ site.url }}{{ site.baseurl }}/mathjax/stats.js");
