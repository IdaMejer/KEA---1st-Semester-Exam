<script type="text/javascript" language="javascript">
02
//get the page URL and take the substring after the ?
03
qsFull = window.location.search.substring(1);
04
//split the substring based on the location of the =
05
qsValue = qsFull.split("=");
06
//check on the value of querystring parameter and write the appropriate headline
07
if(qsValue[1] == "no")
08
{
09
    document.writeln('<h1>Div1<\/h1>');
10
    document.getElementById('div1').style.backgroundColor = '#D4DBE7';
11
}
12
else
13
{
14
    document.writeln('<h1>Div2<\/h1>');
15
    document.getElementById('div2').style.backgroundColor = '#D4DBE7';
16
}
17
</script>

