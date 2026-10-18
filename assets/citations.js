/* Google Scholar citations per year (https://scholar.google.com/citations?user=ArqlkTUAAAAJ).
   To update: edit the numbers below (copy them from the Scholar profile). */
(function(){
  var YEARS={2017:94,2018:292,2019:574,2020:980,2021:1319,2022:1377,2023:1530,2024:1702,2025:2368,2026:2709};
  var el=document.getElementById("citations-chart");if(!el)return;
  var es=/^es/i.test(document.documentElement.lang||"");
  var ys=Object.keys(YEARS),max=Math.max.apply(null,ys.map(function(y){return YEARS[y]}));
  var fmt=function(n){return n>=1000?(n/1000).toFixed(1).replace(".0","")+"k":String(n)};
  var cols=ys.map(function(y,i){
    return '<div class="ccol'+(i===ys.length-1?' partial':'')+'"><span class="cv">'+fmt(YEARS[y])+'</span><div class="cb" style="height:'+(YEARS[y]/max*100).toFixed(1)+'%"></div></div>'}).join("");
  var labels=ys.map(function(y){return "<span>"+y+"</span>"}).join("");
  el.innerHTML='<div class="ctitle">'+(es?"Citas por año":"Citations per year")+'</div><div class="cplot" role="img" aria-label="'+(es?"Citas por año":"Citations per year")+'">'+cols+'</div><div class="clabels">'+labels+'</div>';
})();
