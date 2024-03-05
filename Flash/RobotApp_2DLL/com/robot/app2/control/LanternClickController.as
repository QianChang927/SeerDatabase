package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class LanternClickController
   {
      
      private static var _mc:MovieClip;
      
      private static var _isLight:Boolean;
      
      private static var _isInit:Boolean;
       
      
      public function LanternClickController()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         var date:Date = SystemTimerManager.sysBJDate;
         var onDate:Boolean = date.getFullYear() == 2015 && (date.month == 1 && date.date >= 27) || date.month > 1;
         if(!onDate)
         {
            return;
         }
         ResourceManager.getResource(ClientConfig.getAppRes("LanternMap_mc"),function(param1:MovieClip):void
         {
            _mc = param1;
            map.btnLevel.addChild(_mc);
            param1["arrow1"].visible = false;
            param1["arrow2"].visible = false;
            param1["btn_1"].addEventListener(MouseEvent.CLICK,onClick1);
            param1["btn_2"].addEventListener(MouseEvent.CLICK,onClick2);
            var _loc2_:int = int(MapManager.currentMap.id);
            switch(MapManager.currentMap.id)
            {
               case 332:
                  param1.gotoAndStop(1);
                  updateState(11622);
                  break;
               case 103:
                  param1.gotoAndStop(4);
                  updateState(11623);
                  break;
               case 7:
                  param1.gotoAndStop(3);
                  updateState(11624);
                  break;
               case 4:
                  param1.gotoAndStop(2);
                  updateState(11625);
                  break;
               case 107:
                  param1.gotoAndStop(5);
                  updateState(11626);
            }
         });
      }
      
      private static function updateState(param1:int) : void
      {
         var daily:int = param1;
         KTool.getMultiValue([daily],function(param1:Array):void
         {
            var _loc2_:* = param1[0] > 0;
            _mc["arrow1"].visible = !_loc2_;
            _mc["arrow2"].visible = !_loc2_;
            _mc["btn_1"].visible = !_loc2_;
            _mc["btn_2"].visible = !_loc2_;
            if(_loc2_)
            {
               _mc["mc1"].gotoAndStop(2);
               _mc["mc2"].gotoAndStop(2);
            }
            _isInit = true;
         });
      }
      
      private static function onClick1(param1:MouseEvent) : void
      {
         if(!_isInit)
         {
            return;
         }
         _mc["btn_1"].visible = false;
         _mc["mc1"].gotoAndStop(2);
         _mc["arrow1"].visible = false;
         if(_isLight)
         {
            send();
         }
         else
         {
            _isLight = true;
         }
      }
      
      private static function onClick2(param1:MouseEvent) : void
      {
         if(!_isInit)
         {
            return;
         }
         _mc["btn_2"].visible = false;
         _mc["mc2"].gotoAndStop(2);
         _mc["arrow2"].visible = false;
         if(_isLight)
         {
            send();
         }
         else
         {
            _isLight = true;
         }
      }
      
      private static function send() : void
      {
         var a:int = 0;
         switch(MapManager.currentMap.id)
         {
            case 332:
               a = 1093;
               break;
            case 103:
               a = 1094;
               break;
            case 7:
               a = 1095;
               break;
            case 4:
               a = 1096;
               break;
            case 107:
               a = 1097;
         }
         SocketConnection.sendWithCallback(4548,function(param1:SocketEvent):void
         {
            ModuleManager.showAppModule("LanternClickPanel",true);
         },a,1);
      }
      
      public static function destroy() : void
      {
         _isLight = false;
         if(_mc)
         {
            _mc["btn_1"].removeEventListener(MouseEvent.CLICK,onClick1);
            _mc["btn_2"].removeEventListener(MouseEvent.CLICK,onClick2);
            _mc = null;
         }
      }
   }
}
