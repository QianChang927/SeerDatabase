package com.robot.app.mapProcess.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class NonoPartyController
   {
      
      private static var _map:BaseMapProcess;
      
      public static var getPets:Array = [];
      
      public static var petIDs:Array = [299,729,398,462,527,597,599,601,698,871,904,940,972,1003,1055,1087,1115,1156,1179,1227,1260,1296,1373,1407,1439,1482,1525,1527,1562,1590,1639,1691,1732,1738,1855,2019,1794,1906,1956,1865,2041,2086,2114,2155,2167,2179,2199,2232,2259];
       
      
      public function NonoPartyController()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _map = param1;
         if(isFinishTask)
         {
            _map.conLevel["party"].gotoAndStop(2);
            _map.conLevel["party"].buttonMode = true;
            _map.conLevel["party"].addEventListener(MouseEvent.CLICK,onClickBook);
         }
         else
         {
            _map.conLevel["party"].gotoAndStop(1);
            _map.conLevel["party"].buttonMode = true;
            _map.conLevel["party"].addEventListener(MouseEvent.CLICK,playAnimate);
         }
      }
      
      private static function onClickBook(param1:Event) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("NonoPartyIntro"));
      }
      
      private static function playAnimate(param1:Event) : void
      {
         var e:Event = param1;
         _map.conLevel["party"].removeEventListener(MouseEvent.CLICK,playAnimate);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20121207_5"),function():void
         {
            isFinishTask = true;
            SocketConnection.send(1022,86052977);
            DisplayUtil.removeForParent(_map.conLevel["party"]);
         });
      }
      
      public static function get isFinishTask() : Boolean
      {
         return BufferRecordManager.getState(MainManager.actorInfo,479);
      }
      
      public static function set isFinishTask(param1:Boolean) : void
      {
         BufferRecordManager.setState(MainManager.actorInfo,479,param1);
      }
      
      public static function destroy() : void
      {
         if(Boolean(_map) && Boolean(_map.conLevel["party"]))
         {
            _map.conLevel["party"].removeEventListener(MouseEvent.CLICK,playAnimate);
         }
         _map = null;
      }
   }
}
