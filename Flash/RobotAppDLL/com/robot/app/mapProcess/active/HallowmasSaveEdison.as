package com.robot.app.mapProcess.active
{
   import com.robot.app.buyItem.ItemAction;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.controller.CameraController;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.clearInterval;
   import flash.utils.clearTimeout;
   import flash.utils.setInterval;
   import flash.utils.setTimeout;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.DisplayUtil;
   
   public class HallowmasSaveEdison
   {
      
      private static var map:BaseMapProcess;
      
      private static const ST_X:Array = [245,500,620,745,910,1030,1200,1325,1455,1615,1750];
      
      private static var crtStep:int;
      
      private static var crtDistance:int;
      
      private static var bloodMc:Fight_blood;
      
      private static var crtBlood:int;
      
      private static const totalBlood:int = 40;
      
      private static var proBar:MovieClip;
      
      private static const BOSSHP:int = 100000;
      
      private static var changeMapInterval:uint = 0;
      
      private static var inFight:Boolean;
      
      private static var timeInterval:int;
      
      private static var bossBlood:Fight_blood;
      
      private static var bossFight:Boolean;
       
      
      public function HallowmasSaveEdison()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         var _loc3_:MovieClip = null;
         map = param1;
         inFight = false;
         bossFight = false;
         map.conLevel.addEventListener(Event.ENTER_FRAME,onCheck);
         crtStep = 0;
         NpcDialog.show(NPC.SEER,["哇。。这里看上去很吓人的样子，蝙蝠洞果然名不虚传啊！我可要小心点，否则找不到解药可就不好了！"],["开始探险！"]);
         bloodMc = new Fight_blood();
         bloodMc.x -= 30;
         bloodMc.y -= MainManager.actorModel.height + 10;
         MainManager.actorModel.sprite.addChild(bloodMc);
         crtBlood = totalBlood;
         setBloodClipInfo(bloodMc,crtBlood,totalBlood);
         ToolBarController.showOrHideAllUser(false);
         var _loc2_:int = 0;
         while(_loc2_ < 11)
         {
            _loc3_ = map.conLevel["st_" + _loc2_];
            _loc3_.gotoAndStop(1);
            _loc2_++;
         }
         proBar = MapManager.currentMap.libManager.getMovieClip("pro_bar");
         LevelManager.mapLevel.addChild(proBar);
         proBar.x = 145;
         proBar.y = 455;
         crtDistance = 0;
         SocketConnection.addCmdListener(CommandID.DOUBLE_BOMB_CHECK_SHOOT,onGetBossInfo);
         SocketConnection.addCmdListener(CommandID.DOUBLE_BOMB_HEAL,onBossHP);
         SocketConnection.send(CommandID.DOUBLE_BOMB_CHECK_SHOOT);
         EventManager.addEventListener(ItemAction.BUY_ONE,onBuyOne);
      }
      
      private static function onCheck(param1:Event) : void
      {
         var mc:MovieClip = null;
         var batArray:Array = null;
         var e:Event = param1;
         if(!inFight && MainManager.actorModel.x > ST_X[crtStep])
         {
            MainManager.actorModel.stopAutoWalk(true);
            MainManager.actorModel.stop();
            MainManager.actorModel.x = ST_X[crtStep];
            setTimeout(function():void
            {
               MainManager.actorModel.x = ST_X[crtStep];
            },100);
            inFight = true;
            showOrHideRoad(true);
            AnimateManager.playMcAnimate(getCrtStMC,1,"mc",function():void
            {
               AimatController.addEventListener(AimatEvent.PLAY_END,onAimatEnd);
               AimatController.start(0,false,false);
               getCrtStMC.gotoAndStop(2);
            });
         }
         if(getCrtStMC.currentFrame == 2)
         {
            mc = getCrtStMC.getChildByName("mc") as MovieClip;
            if(mc.currentFrame == mc.totalFrames)
            {
               batArray = [0,3,5,8,10];
               if(batArray.indexOf(crtStep) != -1)
               {
                  --crtBlood;
                  setBloodClipInfo(bloodMc,crtBlood,totalBlood);
               }
               else
               {
                  crtBlood -= 5;
                  setBloodClipInfo(bloodMc,crtBlood,totalBlood);
                  onPassStep();
               }
            }
         }
         if(crtDistance < MainManager.actorModel.x)
         {
            crtDistance = MainManager.actorModel.x;
            proBar["seer"].x = crtDistance * 600 / 1900;
         }
      }
      
      private static function showOrHideRoad(param1:Boolean) : void
      {
         map.typeLevel["hideRoad"].visible = param1;
         MapManager.currentMap.makeMapArray();
      }
      
      private static function onAimatEnd(param1:AimatEvent) : void
      {
         var evt:AimatEvent = param1;
         if(getCrtStMC.hitTestPoint(evt.info.endPos.x - CameraController.shiftX,evt.info.endPos.y))
         {
            AnimateManager.playMcAnimate(getCrtStMC,3,"mc",function():void
            {
               SocketConnection.send(CommandID.GET_EXP_IN_BATCAVE);
               onPassStep();
            });
         }
         else
         {
            AimatController.start(0,false,false);
         }
      }
      
      private static function onPassStep() : void
      {
         inFight = false;
         DisplayUtil.removeForParent(getCrtStMC);
         AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEnd);
         AimatController.close();
         ++crtStep;
         if(crtStep == 6)
         {
            SocketConnection.send(1022,86051700);
            NpcDialog.show(NPC.AIDISEN,["小赛尔，你终于来救我了，真是谢天谢地，我已经找到救治被咬伤精灵的解药！"],["真的吗？那你快走吧！这里交给我！"],[function():void
            {
               AnimateManager.playMcAnimate(map.conLevel["guanxi"],2,"mc",function():void
               {
                  DisplayUtil.removeForParent(map.conLevel["guanxi"]);
                  NpcDialog.show(NPC.SEER,["看来前往一定还有许多危险的存在，但是我绝不对胆怯的！"],["继续前进！"],[function():void
                  {
                     showOrHideRoad(false);
                  }]);
               });
            }]);
         }
         else if(crtStep == 11)
         {
            map.conLevel.removeEventListener(Event.ENTER_FRAME,onCheck);
            onStartFightBoss();
            showOrHideRoad(false);
         }
         else
         {
            showOrHideRoad(false);
         }
      }
      
      private static function get getCrtStMC() : MovieClip
      {
         return map.conLevel["st_" + crtStep];
      }
      
      private static function setBloodClipInfo(param1:Fight_blood, param2:int, param3:int) : void
      {
         var mc:Fight_blood = param1;
         var life:int = param2;
         var blood:int = param3;
         var frame:uint = uint(101 - uint(100 * (life / blood)));
         mc["perMc"].gotoAndStop(frame);
         if(bloodMc == mc)
         {
            if(life < 1)
            {
               life = 0;
               NpcDialog.show(NPC.SEER,["可恶，看来在这么下去我的盔甲就要彻底损坏了，我还是先出去整修一下！"],["离开蝙蝠洞！"],[function():void
               {
                  MapManager.changeMap(788);
               }]);
            }
            mc["perTxt"].text = "" + life + "/" + blood;
         }
      }
      
      public static function destroy() : void
      {
         ToolBarController.showOrHideAllUser(true);
         map.conLevel.removeEventListener(Event.ENTER_FRAME,onCheck);
         DisplayUtil.removeForParent(proBar);
         proBar = null;
         DisplayUtil.removeForParent(bloodMc);
         bloodMc = null;
         AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatEnd);
         AimatController.close();
         SocketConnection.removeCmdListener(CommandID.DOUBLE_BOMB_CHECK_SHOOT,onGetBossInfo);
         SocketConnection.removeCmdListener(CommandID.DOUBLE_BOMB_HEAL,onBossHP);
         AimatController.removeEventListener(AimatEvent.PLAY_END,onAimatBoss);
         EventManager.removeEventListener(ItemAction.BUY_ONE,onBuyOne);
         ToolBarController.noticeAimat(false);
         clearInterval(timeInterval);
         map.conLevel["boss"].removeEventListener(MouseEvent.MOUSE_OVER,onOver);
         map.conLevel["boss"].removeEventListener(MouseEvent.MOUSE_OUT,onOut);
         map = null;
         bossBlood = null;
      }
      
      private static function onStartFightBoss() : void
      {
         map.conLevel["boss"].mouseChildren = false;
         map.conLevel["boss"].buttonMode = true;
         bossFight = true;
         ToolBarController.noticeAimat(true);
         ToolBarController.showOrHideAllUser(true);
         AimatController.addEventListener(AimatEvent.PLAY_END,onAimatBoss);
         map.conLevel["boss"].addEventListener(MouseEvent.MOUSE_OVER,onOver);
         map.conLevel["boss"].addEventListener(MouseEvent.MOUSE_OUT,onOut);
         timeInterval = setInterval(function():void
         {
            SocketConnection.send(CommandID.DOUBLE_BOMB_CHECK_SHOOT);
            if(!bossBlood && map.conLevel["boss"].currentFrame > 2)
            {
               bossBlood = new Fight_blood();
               bossBlood.y -= 53;
               bossBlood.x -= 3;
               bossBlood["perTxt"].visible = false;
               (map.conLevel["boss"].getChildByName("mc") as MovieClip).addChild(bossBlood);
            }
         },2000);
      }
      
      private static function onOver(param1:MouseEvent) : void
      {
         AimatController.start(0,false,false);
      }
      
      private static function onOut(param1:MouseEvent) : void
      {
         AimatController.close();
      }
      
      private static function onAimatBoss(param1:AimatEvent) : void
      {
         if(map.conLevel["boss"].hitTestPoint(param1.info.endPos.x - CameraController.shiftX,param1.info.endPos.y))
         {
            SocketConnection.send(CommandID.DOUBLE_BOMB_SHOOT,1);
            AimatController.start(0,false,false);
         }
      }
      
      private static function onGetBossInfo(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:int = int(_loc2_.readUnsignedInt());
         var _loc4_:int = int(_loc2_.readUnsignedInt());
         if(bossFight)
         {
            if(_loc4_ == 1384)
            {
               proBar["boss"].gotoAndStop(1);
               map.conLevel["boss"].gotoAndStop(3);
            }
            else
            {
               proBar["boss"].gotoAndStop(2);
               map.conLevel["boss"].gotoAndStop(4);
            }
            if(bossBlood)
            {
               setBloodClipInfo(bossBlood,_loc3_,BOSSHP);
            }
         }
         else if(_loc4_ == 1384)
         {
            proBar["boss"].gotoAndStop(1);
            map.conLevel["boss"].gotoAndStop(1);
         }
         else
         {
            proBar["boss"].gotoAndStop(2);
            map.conLevel["boss"].gotoAndStop(2);
         }
      }
      
      private static function onBossHP(param1:SocketEvent) : void
      {
         var e:SocketEvent = param1;
         var b:ByteArray = e.data as ByteArray;
         var boss_hp:int = int(b.readUnsignedInt());
         if(BOSSHP == boss_hp)
         {
            if(timeInterval > 0)
            {
               clearInterval(timeInterval);
               timeInterval = 0;
               AnimateManager.playMcAnimate(map.conLevel["boss"],map.conLevel["boss"].currentFrame,"mc",function():void
               {
                  map.conLevel["boss"].visible = false;
                  changeMapInterval = setTimeout(changeMap,10000);
               });
            }
         }
         else
         {
            map.conLevel["bloodBack"].play();
         }
      }
      
      private static function changeMap() : void
      {
         clearTimeout(changeMapInterval);
         changeMapInterval = 0;
         MapManager.changeMap(788);
         EventManager.removeEventListener(ItemAction.BUY_ONE,onBuyOne);
      }
      
      private static function onBuyOne(param1:DynamicEvent) : void
      {
         if(param1.paramObject == 400428 || param1.paramObject == 400429)
         {
            changeMap();
         }
      }
   }
}
