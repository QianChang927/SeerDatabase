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
   
   public class Task1721
   {
      
      public static const TASK_ID:uint = 1721;
      
      public static var _map:BaseMapProcess;
       
      
      public function Task1721()
      {
         super();
      }
      
      public static function initTaskForMap708(param1:BaseMapProcess) : void
      {
         SocketConnection.send(1022,86061928);
         _map = param1;
         var _loc2_:int = int(TasksManager.getTaskStatus(TASK_ID));
         if(_loc2_ != TasksManager.COMPLETE)
         {
            if(_loc2_ == TasksManager.UN_ACCEPT)
            {
               TasksManager.accept(TASK_ID);
            }
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
         SocketConnection.send(1022,86061929);
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
               SocketConnection.send(1022,86061930);
               showIcon();
               showTaiLesiEvolutionPanel();
               setTimeout(setFightState,1000);
               KTool.showMapAllPlayerAndMonster();
            });
         });
      }
      
      private static function get prevStroy() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 1;
         var _loc3_:String = "active_20130830_3";
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 1,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SENPUTE,["你就是传说中逆界之门的创造者？"],["是我，玛法里奥。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.FAMALIAO,["与魔域之战即将打响，我需要一位得力的信使，我听说巨石星黑木崖这里有着宇宙最好的信使。"],["那说的就是我森普特。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SENPUTE,["我曾经给巨石灵王做过信使，相信我，绝对没有问题。"],["这样啊，让我看看。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 2,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.FAMALIAO,["不错不错，果然非常迅捷。不过这次的危机非同寻常，可能需要穿越更加凶险的阻挠！"],["哦？是什么样的危险？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SENPUTE,["放心地交给我吧！我也是曾经经历过重重考验的，再大的危险也不能难倒我！"],["真的是这样吗？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.FAMALIAO,["那我来考验一下你的实力！"],["来吧，玛法里奥！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 3,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SENPUTE,["我的翅膀还可以变得更加强力？"],["当然可以，相信自己。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.FAMALIAO,["真正的强者，都是经过不断的历练造就的，不要轻易给自己划定一个上限。"],["说的有道理。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SENPUTE,["那我怎样才能拥有更加强力的翅膀呢？"],["我会帮助你的。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,[_loc3_,true]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 4,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["哇！森普特超进化了！"],["现在应该叫他森德罗斯了！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SENDELUOSI,["这就是超进化的力量吗？我感觉天空已经不是我的极限了！"],["你还要继续突破极限！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.FAMALIAO,["疾风之翼可以说是飞行系的神器，你现在可以掌握疾风之翼的力量了吗？"],["我尝试一下。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 5,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SENDELUOSI,["玛法里奥，我已经准备好了接受你的征召！"],["不错不错， 你适应得很快。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.FAMALIAO,["那么，传递正义讯息这个重任就要交给你了。有了疾风之翼的帮助，我也不担心你会遇到什么危险了。"],["放心地交给我吧！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SENDELUOSI,["在飞行这一点上，我绝对不会输给任何人，我愿意做你忠诚的信使！"],["好，有这个决心就好。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 6,"mc"]));
         return _loc1_;
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
         ModuleManager.showModule(ClientConfig.getAppModule("SenPuTeEvolutionPanel"),"正在打开...",{"onEvolutionComplete":playEvolutionAnim});
      }
      
      private static function playEvolutionAnim() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20130830_3"),onAnimComplete,true);
      }
      
      private static function onAnimComplete() : void
      {
      }
      
      private static function get taskMC() : MovieClip
      {
         return _map.conLevel["mcTask1721"];
      }
      
      private static function get taskBtn() : SimpleButton
      {
         return _map.btnLevel["btnTask1721"];
      }
      
      private static function get quipment() : DisplayObject
      {
         return _map.btnLevel["quipmentMC1721"];
      }
      
      public static function destory() : void
      {
         _map = null;
      }
   }
}
