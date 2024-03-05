package com.robot.app2.control.newSeer2015
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NewSeerPreTask
   {
      
      private static var _ins:com.robot.app2.control.newSeer2015.NewSeerPreTask;
       
      
      public function NewSeerPreTask()
      {
         super();
      }
      
      public static function get instance() : com.robot.app2.control.newSeer2015.NewSeerPreTask
      {
         return _ins || (_ins = new com.robot.app2.control.newSeer2015.NewSeerPreTask());
      }
      
      public function start() : void
      {
         if(!BitBuffSetClass.getState(NewSeer2015Controller.PRE_TASK_BITBUF))
         {
            KTool.hideMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(false);
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie(NewSeer2015Controller.PRE_TASK_FULL_ANIM),function():void
            {
               ResourceManager.getResource(ClientConfig.getMapAnimate(NewSeer2015Controller.PRE_TASK_MAP_ANIM),function(param1:MovieClip):void
               {
                  var anim:MovieClip = param1;
                  MapManager.currentMap.controlLevel.addChild(anim);
                  AnimateManager.playMcAnimate(anim,1,"mc1",function():void
                  {
                     DisplayUtil.removeForParent(anim);
                     KTool.showMapAllPlayerAndMonster();
                     BitBuffSetClass.setState(NewSeer2015Controller.PRE_TASK_BITBUF,1);
                     MapObjectControl.hideOrShowAllObjects(true);
                     CommonUI.addYellowArrowForMapObject("paiteNpc");
                  });
               });
            });
         }
         else if(!BitBuffSetClass.getState(NewSeer2015Controller.PRE_TASK_OPEN_PANEL))
         {
            CommonUI.addYellowArrowForMapObject("paiteNpc");
         }
      }
      
      public function checkIcon() : void
      {
         if(!BitBuffSetClass.getState(NewSeer2015Controller.PRE_TASK_OPEN_PANEL))
         {
            BitBuffSetClass.setState(NewSeer2015Controller.PRE_TASK_OPEN_PANEL,1);
            ResourceManager.getResource(ClientConfig.getAppRes("newSeer2015/newseer_sign_icon_anim"),function(param1:MovieClip):void
            {
               var anim:MovieClip = param1;
               LevelManager.tipLevel.addChild(anim);
               AnimateManager.playMcAnimate(anim,1,"mc",function():void
               {
                  DisplayUtil.removeForParent(anim);
                  NewSeerInteract.instance.loadAndPlay("pre_task_dialog_paite",complete);
               });
            });
         }
      }
      
      public function complete() : void
      {
         KTool.changeMapWithCallBack(NewSeer2015Controller.MAIN_MAP,function():void
         {
            NewSeer2015Controller.startGuide();
         });
      }
   }
}
