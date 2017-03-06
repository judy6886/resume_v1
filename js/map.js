// 百度地图API功能
var map = new BMap.Map("allmap");
var point = new BMap.Point(116.331363,40.070025);
map.centerAndZoom(point,15);

var removeMarker = function(e,ee,marker){
    map.removeOverlay(marker);
}
//创建右键菜单
var markerMenu=new BMap.ContextMenu();
markerMenu.addItem(new BMap.MenuItem('删除',removeMarker.bind(marker)));

var marker = new BMap.Marker(point);
map.addOverlay(marker);
marker.addContextMenu(markerMenu);
