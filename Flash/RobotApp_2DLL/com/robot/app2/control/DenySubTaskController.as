package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.iconLevel.IconController;
   import com.robot.app2.utilClass.ActivityXMLInfo;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.mode.MapModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NpcDialogNew_1;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   
   public class DenySubTaskController
   {
      
      public static const BUFFER_ID:Array = [1301,1302,1303,1304];
      
      public static const MAPID_ARR:Array = [11032,11032,11032,11032];
      
      private static const _taskId:int = 3122;
      
      private static const _mapAnimate:String = "DenySubTaskAni";
      
      private static var _map:MapModel;
      
      private static var _curStep:int;
      
      private static var _activity:ActivityXMLInfo;
      
      private static var _taskMc:MovieClip;
      
      private static var _icon:MovieClip;
       
      
      public function DenySubTaskController()
      {
         super();
      }
      
      public static function setup(param1:MovieClip = null) : void
      {
         var icon:MovieClip = param1;
         ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
         {
            _taskMc = param1;
            _icon = icon;
            _activity = new ActivityXMLInfo("1225/DenySubTask",param1,init);
         },"animation");
         NpcDialogNew_1._HasDanmu = false;
      }
      
      public static function init() : void
      {
         _curStep = getCurStep();
         if(_curStep == BUFFER_ID.length)
         {
            MapManager.currentMap.controlLevel.visible = false;
            IconController.hideIcon("denySTicon");
            SocketConnection.sendWithCallback(2202,function():void
            {
               destroy();
            },_taskId,1);
            return;
         }
         KTool.changeMapWithCallBack(MAPID_ARR[_curStep],function():void
         {
            if(_curStep == 2)
            {
               ModuleManager.showAppModule("DenySubTaskFightPanel");
            }
            else
            {
               MapManager.currentMap.controlLevel.addChild(_taskMc);
               _activity.playStory(_curStep + 1,function():void
               {
                  BufferRecordManager.setMyState(BUFFER_ID[_curStep],true,function():void
                  {
                     init();
                  });
               });
            }
         });
      }
      
      private static function getCurStep() : int
      {
         var _loc1_:int = 0;
         while(_loc1_ < BUFFER_ID.length)
         {
            if(!BufferRecordManager.getMyState(BUFFER_ID[_loc1_]))
            {
               return _loc1_;
            }
            _loc1_++;
         }
         return BUFFER_ID.length;
      }
      
      public static function destroy() : void
      {
         _taskMc = null;
         NpcDialogNew_1._HasDanmu = true;
         _icon = null;
         _map = null;
         _activity = null;
      }
   }
}
