package com.robot.app.task.taskscollection
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.utils.setTimeout;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1677
   {
      
      public static const TASK_ID:uint = 1677;
      
      public static var _map:BaseMapProcess;
       
      
      public function Task1677()
      {
         super();
      }
      
      public static function initTaskForMap58(param1:BaseMapProcess) : void
      {
         SocketConnection.send(1022,86060626);
         _map = param1;
         var _loc2_:int = int(TasksManager.getTaskStatus(TASK_ID));
         if(_loc2_ != TasksManager.COMPLETE)
         {
            if(_loc2_ == TasksManager.UN_ACCEPT)
            {
               TasksManager.accept(TASK_ID);
            }
            SocketConnection.send(1022,86061250);
            showTaskMC();
         }
         else
         {
            showIcon();
         }
      }
      
      private static function showTaskMC() : void
      {
         if(quipment)
         {
            quipment.visible = false;
         }
         taskMC.gotoAndStop(1);
         taskBtn.addEventListener(MouseEvent.CLICK,onClickShowTaskProcess);
      }
      
      private static function onClickShowTaskProcess(param1:MouseEvent) : void
      {
         KTool.hideMapAllPlayerAndMonster();
         playPreStory();
      }
      
      private static function playPreStory() : void
      {
         TaskDiaLogManager.single.playStory(prevStroy,function():void
         {
            MainManager.isFighting = true;
            TasksManager.complete(TASK_ID,0,function():void
            {
               var setFightState:Function = null;
               setFightState = function():void
               {
                  MainManager.isFighting = false;
               };
               SocketConnection.send(1022,86061251);
               showIcon();
               showTaiLesiEvolutionPanel();
               setTimeout(setFightState,1000);
               KTool.showMapAllPlayerAndMonster();
            });
         });
      }
      
      private static function get prevStroy() : Array
      {
         var _loc1_:int = 1;
         var _loc2_:String = "active_20130816_5";
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc1_ + 1,"mc"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHASI,["哎……我们也想成为传说中更多神宠拯救世界，不过看起来预言里说的一定不是我们……"],["不要这么沮丧嘛！"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHAERDUN,["守护家园也是我们的责任，谁要是敢侵犯，我一定要让他们好看！"],["哇！说的真好！"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHASI,["可是我们实在太弱了，连战神联盟都被打败了，靠我们怎么可能拯救世界……"],["哇！说的真好！"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc1_ + 2,"mc"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHAERDUN,["迈迪文，我也想加入光明远征军对抗魔域入侵，我不会让我们的家园被别人破坏！"],["嗯，我们欢迎你加入。"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["查尔顿，你锋利的刀刃，无畏的勇气一定可以帮助到我们。只是现在形势十分不利，前景十分危险……"],["我们不怕危险！"]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSIDIJIA,["我倒不这么看，凡域的精灵一直拥有令我们吃惊的潜力，在危机到来的时候，他们的一定会爆发！"],["可是具体要怎么做呢？"]);
         var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHAERDUN,["对，我们虽然不是什么神宠，但是也有一颗战斗的心，不会让任何人轻视我们！"],["我喜欢你的斗志和勇气。"]);
         var _loc12_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc1_ + 3,"mc"]);
         var _loc13_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHAERDUN,["怎么回事？刚刚的艾辛格呢？"],["没有艾辛格，其实是我。"]);
         var _loc14_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSIDIJIA,["勇气是所有力量的源泉，其实所谓的神宠就是你们自己，你们每一个都可以拯救世界！"],["我真的可以吗？"]);
         var _loc15_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["什么意思？没有所谓的救世神宠？"],["解决危机只能靠你们自己"]);
         var _loc16_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSIDIJIA,["在这个世界我的力量受到扼制，我只能帮助你们成长，打败暗黑魔君的入侵，还是要靠你们的决心和勇气！"],["我们有决心和勇气！"]);
         var _loc17_:TaskMod = new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,[_loc2_,true]);
         var _loc18_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["哇！查尔顿超进化了！"],["现在应该叫他查特林了！"]);
         var _loc19_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSIDIJIA,["查特林，你现在有信心保卫自己的家园了吗？"],["信心，一直都有！"]);
         var _loc20_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc1_ + 4,"mc"]);
         var _loc21_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["神宠超进化的力量真的可以打败暗黑魔君吗？"],["一切都需要去争取。"]);
         var _loc22_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BOSIDIJIA,["现在你们已经到了不得不战斗的时刻，没有时间去思考胜负了，只能不停地战斗，这个世界的安危就靠你们了！"],["交给我们吧！"]);
         var _loc23_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHATELIN,["我们就是为战斗而生，谁敢侵犯我们的家园，我们会用我们的利刃回击他们！"],["说得好查特林！"]);
         var _loc24_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc1_ + 5,"mc"]);
         var _loc25_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MAIDIWEN,["查特林，欢迎你，我的新战友，我们一起踏上征程吧！"],["这是我的光荣！"]);
         var _loc26_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.CHATELIN,["暗黑魔君是我们共同的敌人，我一定会尽自己的一份力阻止他！"],["我相信你的实力和勇气！"]);
         var _loc27_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc1_ + 6,"mc"]);
         return [_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_,_loc17_,_loc18_,_loc19_,_loc20_,_loc21_,_loc22_,_loc23_,_loc24_,_loc25_,_loc26_,_loc27_];
      }
      
      private static function showIcon() : void
      {
         DisplayUtil.removeForParent(taskMC);
         DisplayUtil.removeForParent(taskBtn);
         quipment.visible = true;
         if(quipment)
         {
            quipment.addEventListener(MouseEvent.CLICK,onClickOpenEvolutionPanel);
         }
      }
      
      private static function onClickOpenEvolutionPanel(param1:MouseEvent) : void
      {
         showTaiLesiEvolutionPanel();
      }
      
      private static function showTaiLesiEvolutionPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ChaerdunEvolutionPanel"),"正在打开...",{"callback":playEvolutionAnim});
      }
      
      private static function playEvolutionAnim() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20130816_5"),onAnimComplete,true);
      }
      
      private static function onAnimComplete() : void
      {
      }
      
      private static function get taskMC() : MovieClip
      {
         return _map.conLevel["mcTask1677"];
      }
      
      private static function get taskBtn() : SimpleButton
      {
         return _map.btnLevel["btnTask1677"];
      }
      
      private static function get quipment() : DisplayObject
      {
         return _map.btnLevel["quipmentMC1677"];
      }
      
      public static function destory() : void
      {
         _map = null;
      }
   }
}
