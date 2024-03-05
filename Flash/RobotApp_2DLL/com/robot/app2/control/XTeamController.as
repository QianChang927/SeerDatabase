package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import flash.display.DisplayObject;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class XTeamController
   {
      
      public static var isXTeamActive:Boolean;
      
      public static var petList:Array = [2420,2400,2393,2388,2415,2356];
       
      
      public function XTeamController()
      {
         super();
      }
      
      public static function checkActive() : void
      {
         KTool.getForeverNum(5146,function(param1:uint):void
         {
            isXTeamActive = Boolean(param1);
         });
      }
      
      public static function showAlarm(param1:String) : void
      {
         var str:String = param1;
         ResourceManager.getResource(ClientConfig.getActiveUrl("xteam_alarm"),function(param1:DisplayObject):void
         {
            var sp:Sprite = null;
            var obj:DisplayObject = param1;
            sp = obj as Sprite;
            sp.x = 300;
            sp.y = 138;
            sp["txt"].htmlText = str;
            sp["applyBtn"].addEventListener(MouseEvent.CLICK,function(param1:Event):void
            {
               sp["applyBtn"].removeEventListener(MouseEvent.CLICK,arguments.callee);
               DisplayUtil.removeForParent(sp);
               sp = null;
            });
            LevelManager.gameLevel.addChild(sp);
         },"Xteam_AlarmMC");
      }
   }
}
