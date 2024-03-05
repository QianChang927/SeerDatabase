package com.robot.app.task.taskscollection
{
   import com.robot.app.control.PetCarnivalController;
   import com.robot.app.fight.FightManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.CarnivalEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.debug.DebugTrace;
   
   public class Task636
   {
      
      private static var _map:BaseMapProcess;
      
      private static var petMC:MovieClip;
      
      private static var winFirst:Boolean;
      
      private static var isSetup:Boolean;
      
      private static var canFight:Boolean;
       
      
      public function Task636()
      {
         super();
      }
      
      public static function initTaskForMap498(param1:BaseMapProcess) : void
      {
         _map = param1;
         petMC = _map.depthLevel["pet2MC"];
         petMC.visible = false;
         if(!isSetup)
         {
            isSetup = true;
            PetCarnivalController.getInstance().addEventListener(CarnivalEvent.TUGGAME,gameResultHandler);
            return;
         }
         if(isSetup && winFirst)
         {
            petMC.visible = true;
            petMC.buttonMode = true;
            petMC.addEventListener(MouseEvent.CLICK,petClickHandler);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightResultHandler);
            NpcDialog.show(NPC.SEER,["咦！怎么会有一只精灵在这里呢？它是谁啊？难道是嘉年华邀请的嘉宾吗？"],["快去问问它(点击精灵)"]);
         }
      }
      
      private static function petClickHandler(param1:MouseEvent) : void
      {
         var evt:MouseEvent = param1;
         NpcDialog.show(NPC.JILU,["你好啊！亲爱的小赛尔，我可是嘉年华拔河大比拼的特邀嘉宾哦！拔河运动真是太好玩了！"],["哇！特邀嘉宾！！我想和你做朋友，行吗？"],[function():void
         {
            NpcDialog.show(NPC.JILU,["做朋友？可以啊！不过就看你能不能抓到我咯！！"],["呵呵！我不会让你失望的！(点击精灵捕捉)"],[function():void
            {
               FightManager.fightWithBoss("基鲁",1);
               winFirst = false;
            }]);
         }]);
      }
      
      private static function gameResultHandler(param1:CarnivalEvent) : void
      {
         var evt:CarnivalEvent = param1;
         if(Boolean(evt.gameSuccess) && isSetup && !winFirst)
         {
            if(Math.random() * 100 >> 0 > 15)
            {
               return;
            }
            winFirst = true;
         }
      }
      
      private static function fightResultHandler(param1:PetFightEvent) : void
      {
         var _loc2_:FightOverInfo = null;
         if(canFight && winFirst && MapManager.currentMap.id == 498)
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightResultHandler);
            _loc2_ = param1.dataObj["data"];
            if(_loc2_.winnerID != MainManager.actorInfo.userID)
            {
               taskGiveUp();
            }
            else
            {
               destroyTask();
               DebugTrace.show("任务完成的很不错哦");
            }
         }
      }
      
      private static function taskGiveUp() : void
      {
         NpcDialog.show(NPC.JILU,["哎…你还是不行啊！不过我还是会给你机会的，记得多来拔河大比拼试试吧，我最喜欢和强者做朋友了，哈哈！我会等着你的…"],["可恶！你看好吧！我一定会取得胜利的！"],[function():void
         {
            destroyTask();
            petMC.visible = false;
         }]);
      }
      
      private static function destroyTask() : void
      {
         winFirst = false;
         canFight = false;
      }
      
      public static function destory() : void
      {
         if(petMC)
         {
            petMC.removeEventListener(MouseEvent.CLICK,petClickHandler);
         }
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightResultHandler);
      }
   }
}
