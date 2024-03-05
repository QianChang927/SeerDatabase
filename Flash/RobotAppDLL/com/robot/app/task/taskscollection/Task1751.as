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
   
   public class Task1751
   {
      
      public static const TASK_ID:uint = 1751;
      
      public static var _map:BaseMapProcess;
       
      
      public function Task1751()
      {
         super();
      }
      
      public static function initTaskForMap670(param1:BaseMapProcess) : void
      {
         SocketConnection.send(1022,86062511);
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
         _map.depthLevel.visible = false;
         KTool.hideMapAllPlayerAndMonster();
         playPreStory();
         SocketConnection.send(1022,86062512);
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
               SocketConnection.send(1022,86062513);
               _map.depthLevel.visible = true;
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
         var _loc3_:String = "active_20130913_7";
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 1,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KEMITE,["猛虎王，马上就到年底了，这不是还有我可以一直陪你聊天吗？"],["是啊，这里还有你！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MENGHUWANG,["对啊，克米特，你来挑战我吧，好久没有出手了，骨头都有些痒了……"],["啊？你开玩笑在吧……"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KEMITE,["猛虎王，我哪是你的对手啊，陪你聊聊天玩玩游戏还可以……"],["没事，来玩玩嘛！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 2,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MENGHUWANG,["克米特，你一直在这里陪着我，我猛虎王就给你特训一下作为报答吧，变强了以后才不会被别的精灵欺负！"],["我可不想变强……"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KEMITE,["猛虎王，谢谢你了，可是我只想做一个无忧无虑的普通精灵……"],["哎，真是没有上进心。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MENGHUWANG,["少废话了，赶紧来吧，躲躲闪闪真不像话！"],["猛虎王，别冲动啊！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 3,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENGYIZHILING,["真是不知羞耻，居然欺凌弱小！"],["你是谁？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MENGHUWANG,["看起来很厉害的样子，太好了，这里很久没有来过强者了……"],["哎呀，误会了……"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENGYIZHILING,["我是圣翼之灵，你就是猛虎王吧，居然连野生精灵也不放过，我不会让你这么欺负克米特的。"],["圣翼之灵，他没有欺负我。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KEMITE,["猛虎王只是在帮我特训，没有强力的对手战斗猛虎王很无聊的，他不是在欺负我……"],["原来是这样啊……"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 4,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MENGHUWANG,["既然来了，不妨和我猛虎王切磋一下吧！"],["真是个好战的家伙！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENGYIZHILING,["我还有我的敌人要对付，可惜你不在这个行列中，我不会和你交手的。"],["不要这么狂妄！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MENGHUWANG,["是什么样的敌人，比我猛虎王还强吗？"],["我只是不愿和你交手。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENGYIZHILING,["这是创世之神留下的使命，我要等待新的主人，一起迎接前所未有的挑战！"],["什么创世之神？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,[_loc3_,true]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KEMIDIYA,["原来这就是超进化的力量，感觉好极了！"],["快来和我交手吧！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHENGYIZHILING,["你是一个善良的精灵，将来一定可以用你的力量守护正义！我期待着你的表现！"],["放心吧，我一定会的！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.MENGHUWANG,["什么正义不正义的，快来战斗吧！让我看看超进化的实力，这才是关键！"],["猛虎王，你可真心急……"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[taskMC,_loc2_ + 5,"mc"]));
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
         ModuleManager.showModule(ClientConfig.getAppModule("KeMiTeEvolutionPanel"),"正在打开...",{"onEvolutionComplete":playEvolutionAnim});
      }
      
      private static function playEvolutionAnim() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active_20130913_7"),onAnimComplete,true);
      }
      
      private static function onAnimComplete() : void
      {
      }
      
      private static function get taskMC() : MovieClip
      {
         return _map.conLevel["mcTask1751"];
      }
      
      private static function get taskBtn() : SimpleButton
      {
         return _map.btnLevel["btnTask1751"];
      }
      
      private static function get quipment() : DisplayObject
      {
         return _map.depthLevel["quipmentMC1751"];
      }
      
      public static function destory() : void
      {
         _map = null;
      }
   }
}
