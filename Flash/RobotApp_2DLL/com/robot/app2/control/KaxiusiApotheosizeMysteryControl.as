package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.loading.Loading;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.utils.DisplayUtil;
   
   public class KaxiusiApotheosizeMysteryControl
   {
       
      
      public function KaxiusiApotheosizeMysteryControl()
      {
         super();
      }
      
      public static function playPreTask() : void
      {
         var mcloader:MCLoader = null;
         hideOrShowNpc(false);
         mcloader = new MCLoader(ClientConfig.getMapAnimate("kaxiusi"),null,Loading.TITLE_AND_PERCENT,"加载..");
         mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
         {
            var d1:Array;
            var d2:Array;
            var taskQuePro:TaskQuneProcessor;
            var mapMv:MovieClip = null;
            var e:* = param1;
            mapMv = mcloader.loader.content["mv"];
            mapMv.parent.removeChild(mapMv);
            d1 = [[NPC.HAQIUSI,["恐惧之境不是你们争斗的场所！识相的就赶紧离开这里！"],["我想了解一下卡修斯……"]],[NPC.HAQIUSI,["你是什么家伙？时光之轮不是你想看就能看的！佩里恩，尤克斯，我劝你们尽早离开这里！"],["我不会离开的！"]],[NPC.SEER,["我想要知道卡修斯到底发生了什么事情？难道他的封神之路只是传说？"],["并不是谁都能看到！"]]];
            d2 = [[NPC.SEER,["两位，为了了解卡修斯封神之谜！得罪了！"],["好大的口气！"]],[NPC.PEILIEN,["就凭你的实力，你能够战胜我拿到光明碎片吗？"],["不要太自信！"]],[NPC.UKESI,["魔域精灵从来都不会轻易地将魔之精华拱手相送的！"],["那就让我用实力证明吧（挑战精灵，收集道具）"]]];
            taskQuePro = new TaskQuneProcessor();
            taskQuePro.addChangeMap(978,function():void
            {
               var tid:int = 0;
               MapManager.currentMap.btnLevel.addChild(mapMv);
               tid = int(setTimeout(function():void
               {
                  clearTimeout(tid);
                  MapObjectControl.hideOrShowAllObjects(false);
               },200));
               NpcController.hideNpc(1);
               KTool.hideMapAllPlayerAndMonster();
            });
            taskQuePro.addMapMv(mapMv,1,"mv");
            taskQuePro.addDialog(d1);
            taskQuePro.addMapMv(mapMv,2,"mv");
            taskQuePro.addDialog(d2);
            taskQuePro.procesEndFun = function():void
            {
               MapObjectControl.hideOrShowAllObjects(true);
               BufferRecordManager.setMyState(1080,true);
               mcloader.clear();
               DisplayUtil.removeForParent(mapMv);
               KTool.showMapAllPlayerAndMonster();
               ToolBarController.showOrHideAllUser(ToolBarController.panel.panelIsShow);
               initForMap978();
               SocketConnection.send(1022,86070056);
            };
            taskQuePro.start();
         });
         mcloader.doLoad();
      }
      
      public static function hasFinishPreTask() : Boolean
      {
         return BufferRecordManager.getMyState(1080);
      }
      
      private static function onClickNpc(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "peilien":
               SocketConnection.send(1022,86070058);
               NpcDialog.show(NPC.PEILIEN,["就凭你的实力，你能够战胜我拿到光明碎片吗？"],["不要太自信！我马上战胜你！"],[function():void
               {
                  FightManager.fightNoMapBoss("佩里恩",894);
               }]);
               break;
            case "youkesi":
               SocketConnection.send(1022,86070057);
               NpcDialog.show(NPC.UKESI,["魔域精灵从来都不会轻易地将魔之精华拱手相送的！"],["那就让我用实力证明吧！!"],[function():void
               {
                  FightManager.fightNoMapBoss("尤克斯",895);
               }]);
               break;
            case "haqiusi":
               KTool.getBitSet([16030],function(param1:Array):void
               {
                  var arr:Array = param1;
                  if(arr[0])
                  {
                     NpcDialog.show(NPC.HAQIUSI,["想要了解卡修斯封神之谜，现在只差最后一步！战胜我，你将会明白一切的！"],["好！我一定会战胜你!","对不起，我又没时间了！"],[function():void
                     {
                        FightManager.fightNoMapBoss("哈丘斯",896);
                     }]);
                  }
                  else
                  {
                     NpcDialog.show(NPC.HAQIUSI,["0xff0000" + MainManager.actorInfo.nick + "0xffffff，你只要击败我，我便与你一路追踪卡修斯封神之谜！一切你说了算！"],["好啊！我现在就击败你!","对不起，我没时间！"],[function():void
                     {
                        FightManager.fightNoMapBoss("哈丘斯",896);
                     }]);
                  }
               });
         }
      }
      
      public static function initForMap978() : void
      {
         MapListenerManager.add(MapManager.currentMap.controlLevel["peilien"],onClickNpc,"佩里恩");
         MapListenerManager.add(MapManager.currentMap.controlLevel["youkesi"],onClickNpc,"尤克斯");
         MapListenerManager.add(MapManager.currentMap.controlLevel["haqiusi"],onClickNpc,"哈丘斯");
         hideOrShowNpc(false);
         KTool.getBitSet([16024,16025,16026,16027,16028,16029],function(param1:Array):void
         {
            MapManager.currentMap.controlLevel["peilien"].visible = true;
            MapManager.currentMap.controlLevel["youkesi"].visible = true;
            if(param1.indexOf(0) == -1)
            {
               MapManager.currentMap.controlLevel["haqiusi"].visible = true;
            }
            if(!hasFinishPreTask())
            {
               hideOrShowNpc(false);
            }
         });
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
      }
      
      public static function hideOrShowNpc(param1:Boolean) : void
      {
         MapManager.currentMap.controlLevel["peilien"].visible = param1;
         MapManager.currentMap.controlLevel["youkesi"].visible = param1;
         MapManager.currentMap.controlLevel["haqiusi"].visible = param1;
      }
      
      private static function fightOverHandler(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         var info:FightOverInfo = e.dataObj as FightOverInfo;
         if(FightManager.currentBossRegion == 896 && MapManager.currentMap.id == 978)
         {
            if(info.winnerID == MainManager.actorID)
            {
               playWinMc();
            }
            else
            {
               KTool.getBitSet([16030],function(param1:Array):void
               {
                  var arr:Array = param1;
                  if(arr[0])
                  {
                     NpcDialog.show(NPC.HAQIUSI,["想要了解卡修斯封神之谜，现在只差最后一步！战胜我，你将会明白一切的！"],["好！我一定会战胜你!","对不起，我又没时间了！"],[function():void
                     {
                        FightManager.fightNoMapBoss("哈丘斯",896);
                     }]);
                  }
                  else
                  {
                     NpcDialog.show(NPC.HAQIUSI,["0xff0000" + MainManager.actorInfo.nick + "0xffffff，你只要击败我，我便与你一路追踪卡修斯封神之谜！一切你说了算！"],["好啊！我现在就击败你!","对不起，我没时间！"],[function():void
                     {
                        FightManager.fightNoMapBoss("哈丘斯",896);
                     }]);
                  }
               });
            }
         }
      }
      
      private static function playWinMc() : void
      {
         KTool.getBitSet([16030],function(param1:Array):void
         {
            var mcloader:MCLoader = null;
            var arr:Array = param1;
            mcloader = new MCLoader(ClientConfig.getMapAnimate("kaxiusi"),null,Loading.TITLE_AND_PERCENT,"加载..");
            mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
            {
               var taskQuePro:TaskQuneProcessor;
               var d1:Array;
               var mapMv:MovieClip = null;
               var e:* = param1;
               MapObjectControl.hideOrShowAllObjects(false);
               KTool.hideMapAllPlayerAndMonster();
               mapMv = mcloader.loader.content["mv"];
               mapMv.parent.removeChild(mapMv);
               MapManager.currentMap.controlLevel.addChild(mapMv);
               taskQuePro = new TaskQuneProcessor();
               d1 = [[NPC.SEER,["我胜利了！我胜利了！耶！"]]];
               taskQuePro.addDialog(d1);
               if(arr[0])
               {
                  taskQuePro.addMapMv(mapMv,4,"mv");
               }
               else
               {
                  taskQuePro.addMapMv(mapMv,6,"mv");
               }
               taskQuePro.procesEndFun = function():void
               {
                  MapObjectControl.hideOrShowAllObjects(true);
                  BufferRecordManager.setMyState(1080,true);
                  mcloader.clear();
                  DisplayUtil.removeForParent(mapMv);
                  KTool.showMapAllPlayerAndMonster();
                  ToolBarController.showOrHideAllUser(ToolBarController.panel.panelIsShow);
                  initForMap978();
                  if(arr[0])
                  {
                     NpcDialog.show(NPC.SEER,["佩里恩、尤克斯！为了卡修斯封神，得罪了！"],["用实力证明实力强大吧！（挑战精灵，收集道具）"]);
                  }
                  else
                  {
                     NpcDialog.show(NPC.SEER,["封神之谜，真相即将大白！我还是在这里多挑战一下，提升自己的实力吧！"],["加油吧！"]);
                  }
               };
               taskQuePro.start();
            });
            mcloader.doLoad();
         });
      }
   }
}
