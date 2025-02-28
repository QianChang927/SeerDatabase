package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.DialogControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.xml.MapXMLInfo;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.utils.BitUtils;
   import flash.events.MouseEvent;
   
   public class SceneEasterEggController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _mapIdsArr:Array = [4,5,7,1];
      
      private static var _bitArr:Array = [28,29,30,31];
      
      private static var _dialogIDArr:Array = [19,20,21,22];
      
      private static var _curIndex:int;
       
      
      public function SceneEasterEggController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.topLevel["boxAnim"].visible = false;
         update();
         MapListenerManager.add(_map.conLevel["stone"],onStoneClick);
         _curIndex = _mapIdsArr.indexOf(MapManager.currentMap.id);
      }
      
      private static function update() : void
      {
         KTool.getMultiValue([124338],function(param1:Array):void
         {
            if(Boolean(SystemTimerManager.getIsInActivity("20250124","2025020710")) && !BitUtils.getBit(param1[0],_bitArr[_curIndex] - 1))
            {
               if(_curIndex > 0 && !BitUtils.getBit(param1[0],_bitArr[_curIndex - 1] - 1))
               {
                  _map.conLevel["stone"].visible = false;
               }
               else
               {
                  _map.conLevel["stone"].visible = true;
                  _map.btnLevel.mouseEnabled = _map.btnLevel.mouseChildren = false;
               }
            }
            else
            {
               _map.conLevel["stone"].visible = false;
            }
         });
      }
      
      public static function onStoneClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         DialogControl.showAllDilogs(169,_dialogIDArr[_curIndex]).then(function():void
         {
            _map.topLevel["boxAnim"].visible = true;
            AnimateManager.playMcAnimate(_map.topLevel["boxAnim"],1,"",function():void
            {
               _map.topLevel["boxAnim"].visible = false;
               KTool.socketSendCallBack(41900,function():void
               {
                  StatManager.sendStat2014("0124场景彩蛋","在地图" + _mapIdsArr[_curIndex] + "领取了" + MapXMLInfo.getName(_mapIdsArr[_curIndex]) + "彩蛋奖励","2025运营活动");
                  update();
               },[103,_bitArr[_curIndex]]);
            },false,true);
         });
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
