var body = d3.select('body');
//console.log(body[0][0]);

var chart = function(total){
  //declare your private variables here
  return function(selected){
    selected.each(function(d,i){
      var el = this;
      var data = d.val;
      d3.select(el)
        .selectAll('div.bar')
        .data([d])
        .enter()
        .append('div')
        .attr('class','bar')
        .html(d.val)
        .attr('style',function(d){
          var percentage = (parseInt(d.val)/parseInt(total))*100;
          return 'color:white;background:green;width:'+percentage+'%;';
        });
    });
  };
}

var data = [{val:2},{val:2},{val:2},{val:2},{val:3},{val:5},{val:10}];
var cht = chart(data.reduce(function(previousValue,currentValue){return previousValue + currentValue.val;},0));

d3.select('#chart')
  .selectAll('div.test')
  .data(data)
  .enter()
    .append('div')
    .attr('class','test')
    .attr('style',function(d,i){
      return 'margin-top:10px;border:1px solid black';
    })
    .append('div')
    .call(cht);
