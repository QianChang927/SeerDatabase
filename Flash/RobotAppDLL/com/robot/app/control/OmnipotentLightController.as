package com.robot.app.control
{
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.utils.ByteArray;
   import gs.TweenLite;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class OmnipotentLightController
   {
      
      private static var _sort:uint;
      
      private static var _subSort:uint;
      
      private static var _subNum:uint;
       
      
      public function OmnipotentLightController()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.OMNIPOTENT_LIGHT_GET_NOTICE,onGetTaskStatus);
      }
      
      private static function onGetTaskStatus(param1:SocketEvent) : void
      {
         var data:ByteArray = null;
         var e:SocketEvent = param1;
         data = e.data as ByteArray;
         data.position = 0;
         _sort = data.readUnsignedInt();
         _subSort = data.readUnsignedInt();
         ResourceManager.getResource(ClientConfig.getAppRes("OmnipotentLightTips"),function(param1:DisplayObject):void
         {
            var _loc2_:MovieClip = param1["tip"] as MovieClip;
            switch(_sort)
            {
               case 1:
                  if(_subSort == 1)
                  {
                     _subNum = data.readUnsignedInt();
                     _loc2_.gotoAndStop(1);
                     (_loc2_["num_0"] as MovieClip).gotoAndStop(6);
                     (_loc2_["num_1"] as MovieClip).gotoAndStop(_subNum + 1);
                  }
                  else if(_subSort == 2)
                  {
                     _subNum = data.readUnsignedInt();
                     _loc2_.gotoAndStop(2);
                     (_loc2_["num_0"] as MovieClip).gotoAndStop(6);
                     (_loc2_["num_1"] as MovieClip).gotoAndStop(_subNum + 1);
                     MapManager.currentMap.topLevel.addChild(param1 as MovieClip);
                     param1.alpha = 1;
                     param1.x = 215.15;
                     param1.y = 183.6;
                     TweenLite.to(param1,3,{
                        "y":150,
                        "alpha":0
                     });
                  }
                  break;
               case 2:
                  if(_subSort == 1)
                  {
                     _subNum = data.readUnsignedInt();
                     _loc2_.gotoAndStop(1);
                     (_loc2_["num_0"] as MovieClip).gotoAndStop(6);
                     (_loc2_["num_1"] as MovieClip).gotoAndStop(_subNum + 1);
                  }
                  else if(_subSort == 2)
                  {
                     _subNum = data.readUnsignedInt();
                     _loc2_.gotoAndStop(3);
                     (_loc2_["num_0"] as MovieClip).gotoAndStop(3);
                     (_loc2_["num_1"] as MovieClip).gotoAndStop(_subNum + 1);
                     MapManager.currentMap.topLevel.addChild(param1 as MovieClip);
                     param1.alpha = 1;
                     param1.x = 215.15;
                     param1.y = 183.6;
                     TweenLite.to(param1,3,{
                        "y":150,
                        "alpha":0
                     });
                  }
                  else if(_subSort == 3)
                  {
                     _subNum = data.readUnsignedInt();
                     _loc2_.gotoAndStop(4);
                     (_loc2_["num_0"] as MovieClip).gotoAndStop(_subNum + 1);
                     MapManager.currentMap.topLevel.addChild(param1 as MovieClip);
                     param1.alpha = 1;
                     param1.x = 215.15;
                     param1.y = 183.6;
                     TweenLite.to(param1,3,{
                        "y":150,
                        "alpha":0
                     });
                  }
                  break;
               case 3:
                  if(_subSort == 1)
                  {
                     _loc2_.gotoAndStop(5);
                     (_loc2_["num_0"] as MovieClip).gotoAndStop(2);
                  }
            }
         },"LightTips");
      }
      
      public static function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.OMNIPOTENT_LIGHT_GET_NOTICE,onGetTaskStatus);
      }
   }
}
