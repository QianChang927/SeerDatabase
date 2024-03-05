package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObject;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class SnakeTearController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _mc:MovieClip;
       
      
      public function SnakeTearController()
      {
         super();
      }
      
      public static function checkTask(param1:BaseMapProcess) : void
      {
         _map = param1;
         if(!BitBuffSetClass.getState(22452))
         {
            loadMC();
         }
      }
      
      private static function loadMC() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("snakeTearAni"),function(param1:MovieClip):void
         {
            _mc = param1;
            _map.topLevel.addChild(_mc);
            startTask();
         });
      }
      
      private static function startTask() : void
      {
         var obj:MapObject;
         StatManager.sendStat2014("天蛇之泪！终极战！","参与前置任务",StatManager.RUN_ACT);
         obj = MapObjectControl.getMapObjetByName("miusiVSkenata");
         if(obj != null)
         {
            obj.visible = false;
         }
         KTool.hideMapPlayerAndMonster();
         _mc.gotoAndStop(1);
         MapListenerManager.add(_mc,function():void
         {
            var step1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KETANA,["缪斯这个蠢货，胆敢来挑衅我！难道不知道我绝情女的厉害吗？请叫我女王大人！"],["你这个坏人，我要与缪斯一起击败你！","好的！大王！"]);
            var step2:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_mc,2,"mc2"]);
            var step3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["谁都不能阻挡我！你们这些可恶的魔石精灵，我一定要教训你们！"],["就凭你？"]);
            var step4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KETANA,["你以为你的瞳之神能很厉害吗？你的能量根本无法触及到我！认输吧，弱者！"],["可恶！"]);
            var step5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["助纣为虐的家伙！我一定要让你好看！让你尝尝失败者的滋味！"],["那就来吧！"]);
            var step6:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_mc,3,"mc3"]);
            var story:Array = [step1,step2,step3,step4,step5,step6];
            TaskDiaLogManager.single.playStory(story,function():void
            {
               MapListenerManager.remove(_mc);
               DisplayUtil.removeForParent(_mc);
               _mc = null;
               ModuleManager.showModule(ClientConfig.getAppModule("SnakeTearPanel1"));
               BitBuffSetClass.setState(22452,1);
               StatManager.sendStat2014("天蛇之泪！终极战！","完成前置任务",StatManager.RUN_ACT);
               KTool.showMapPlayerAndMonster();
               var _loc1_:MapObject = MapObjectControl.getMapObjetByName("miusiVSkenata");
               if(_loc1_ != null)
               {
                  _loc1_.visible = true;
               }
            });
         });
      }
   }
}
