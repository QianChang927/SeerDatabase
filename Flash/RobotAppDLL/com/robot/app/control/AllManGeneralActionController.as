package com.robot.app.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class AllManGeneralActionController
   {
       
      
      public function AllManGeneralActionController()
      {
         super();
      }
      
      public static function fightMiuSi() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverMiuSiHandler);
         FightManager.fightOgre(1633);
      }
      
      private static function onFightOverMiuSiHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOverMiuSiHandler);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            Alarm.show("速度学习力提升5点！缪斯获得10000经验；");
         }
      }
      
      public static function fightQiaoKeLi() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverQiaoKeLiHandler);
         FightManager.fightOgre(707);
      }
      
      private static function onFightOverQiaoKeLiHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOverQiaoKeLiHandler);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            Alarm.show("速度学习力提升5点！巧克利获得10000经验；");
         }
      }
      
      public static function fightJiaGe() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverJiaGe);
         FightManager.fightNoMapBoss("加格",624);
      }
      
      private static function onFightOverJiaGe(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOverJiaGe);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            Alarm.show("特攻学习力提升5点！闪光艾菲亚获得10000经验；");
         }
      }
      
      public static function fightDingGe() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverDingGeHandler);
         FightManager.fightNoMapBoss("丁格",625);
      }
      
      private static function onFightOverDingGeHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOverDingGeHandler);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            Alarm.show("体力学习力提升5点！闪光艾菲亚获得10000经验；");
         }
      }
      
      public static function fightYiLe() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverYiLeHandler);
         FightManager.fightNoMapBoss("依乐",626);
      }
      
      private static function onFightOverYiLeHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOverYiLeHandler);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            Alarm.show("特攻学习力提升5点！巧克利派获得10000经验；");
         }
      }
      
      public static function fightLaLi() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverLaLiHandler);
         FightManager.fightNoMapBoss("拉利",627);
      }
      
      private static function onFightOverLaLiHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOverLaLiHandler);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            Alarm.show("速度学习力提升5点！巧克利派获得10000经验；");
         }
      }
      
      public static function fightMaoQiu() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverMaoQiuHandler);
         FightManager.fightNoMapBoss("毛球",628);
      }
      
      private static function onFightOverMaoQiuHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOverMaoQiuHandler);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            Alarm.show("物攻学习力提升5点！迈迪文获得10000经验；");
         }
      }
      
      public static function fightJiDu() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightJiDuOverHandler);
         FightManager.fightNoMapBoss("吉嘟",629);
      }
      
      private static function onFightJiDuOverHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightJiDuOverHandler);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            Alarm.show("速度学习力提升5点！迈迪文获得10000经验；");
         }
      }
      
      public static function fightXianRenQiu() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightXianRenQiuHandler);
         FightManager.fightNoMapBoss("仙人球",630);
      }
      
      private static function onFightXianRenQiuHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightXianRenQiuHandler);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            Alarm.show("物攻学习力提升5点！魔域仙子获得10000经验；");
         }
      }
      
      public static function fightBiBiShu() : void
      {
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightBiBiShuHandler);
         FightManager.fightNoMapBoss("比比鼠",631);
      }
      
      private static function fightBiBiShuHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightBiBiShuHandler);
         var _loc2_:FightOverInfo = param1.dataObj as FightOverInfo;
         if(_loc2_.winnerID == MainManager.actorID)
         {
            Alarm.show("速度学习力提升5点！魔域仙子获得10000经验；");
         }
      }
      
      public static function goFightGodPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("AifeiyaTrainMainPanel"));
      }
      
      public static function goKaXiuSiPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("AllManKaXiuSiPanel"));
      }
      
      public static function goBuLaiKePanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("AllManBuLaiKePanel"));
      }
      
      public static function goLeiYiPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("AllManLeiYiPanel"));
      }
      
      public static function goMain() : void
      {
         var _loc1_:Boolean = Boolean(BufferRecordManager.getMyState(1043));
         if(_loc1_)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("AllManTotalPanel"));
         }
         else
         {
            showTime();
         }
      }
      
      public static function closeScene() : void
      {
         var _loc1_:DisplayObjectContainer = MapManager.currentMap.controlLevel["animationContainer"];
         var _loc2_:int = 0;
         while(_loc2_ < _loc1_.numChildren)
         {
            _loc1_.getChildAt(_loc2_).visible = false;
            MovieClip(_loc1_.getChildAt(_loc2_)).gotoAndStop(1);
            _loc2_++;
         }
         var _loc3_:Boolean = Boolean(BufferRecordManager.getMyState(1043));
         if(_loc3_)
         {
            _loc1_["npc"].visible = true;
            _loc1_["npc"].buttonMode = true;
         }
         _loc1_["npc"].addEventListener(MouseEvent.CLICK,onNpc);
      }
      
      public static function destroy() : void
      {
         var _loc1_:DisplayObjectContainer = MapManager.currentMap.controlLevel["animationContainer"];
         if(_loc1_["npc"])
         {
            _loc1_["npc"].addEventListener(MouseEvent.CLICK,onNpc);
         }
      }
      
      private static function onNpc(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "bulaike":
               goBuLaiKePanel();
               break;
            case "gaiya":
               goFightGodPanel();
               break;
            case "leiyi":
               goLeiYiPanel();
               break;
            case "kaxiusi":
               goKaXiuSiPanel();
               break;
            case "miusi":
               ModuleManager.showModule(ClientConfig.getAppModule("AllManTotalPanel"));
         }
      }
      
      public static function showTime() : void
      {
         SocketConnection.send(1022,86068533);
         SocketConnection.send(1022,86068534);
         MainManager.selfVisible = false;
         ToolBarController.showOrHideAllUser(false);
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation1"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LEIYI,["我们这段时间一直备受神域结界的反噬能量的折磨！如今索伦森大举进攻，我们需要彻底消除体内的反噬能量"],["有道理！"]);
         var _loc3_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,["对不起，我最近一段时间内，一直在全力寻找我的哥哥，没能和你们并肩作战！"],["没关系。"]);
         var _loc4_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["只要找到耶里梅斯，获得线索！一定可以解救泰坦星系的精灵们！"],["什么线索？"]);
         var _loc5_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["现在还是先帮助你们，将体内神域结界的反噬能量彻底消除干净吧！"],["好的！"]);
         var _loc6_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation2"]);
         var _loc7_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.GAIYA,["我们释放的能量有多大，反噬能量就会让我们自己承受多大能量的冲击！"],["所以能量一直束缚着。"]);
         var _loc8_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAXIUSI_WHITE,["我必须要突破自己，不然，我都不能保护怀特星的精灵们。"],["不要着急！"]);
         var _loc9_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我们再次进入各自的试炼之路！一定可以将大家的反噬能量消除的！"],["缪斯会帮助大家！"]);
         var _loc10_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation3"]);
         var _loc11_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,[MainManager.actorInfo.formatNick + "，仅凭我一己之力，太单薄了！你可以跟我一起吗？"],["当然。"]);
         var _loc12_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我可是赛尔号飞船中，出了名最勇敢最有实力的赛尔！战神联盟一定会变的更加强大的！"],["拜托啦！"]);
         var _loc13_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["你将会是我们的好伙伴！"],["哈哈哈！"]);
         var _loc14_:TaskMod = new TaskMod(TaskDiaLogManager.MAP_UNION_FRAME_MOVIE,0,null,null,[MapManager.currentMap.controlLevel["animationContainer"],"animation4"]);
         var _loc15_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.MIUSI,[MainManager.actorInfo.formatNick + "，让我们并肩协作！一起帮助战神联盟恢复能量！"],["我们一定可以！"]);
         var _loc16_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["战神联盟，我要变得和你们一样强大！"],["一起加油吧！"]);
         TaskDiaLogManager.single.playStory([_loc1_,_loc2_,_loc3_,_loc4_,_loc5_,_loc6_,_loc7_,_loc8_,_loc9_,_loc10_,_loc11_,_loc12_,_loc13_,_loc14_,_loc15_,_loc16_],showTimeComplete);
      }
      
      private static function showTimeComplete() : void
      {
         MainManager.selfVisible = true;
         ToolBarController.showOrHideAllUser(true);
         closeScene();
         SocketConnection.send(1022,86068535);
         BufferRecordManager.setMyState(1043,true);
         ModuleManager.showModule(ClientConfig.getAppModule("AllManTotalPanel"));
      }
   }
}
