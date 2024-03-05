package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.HitTestDuplicate;
   import flash.display.BlendMode;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.getDefinitionByName;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class GiraudSuperEvoControl
   {
      
      public static var fightStatus:Boolean = false;
      
      public static var _map:BaseMapProcess;
      
      private static var seerCircle:MovieClip;
      
      private static var buttonMC:MovieClip;
      
      private static var isHit:Boolean;
      
      private static var bossState:uint;
      
      private static var itemNum:uint;
      
      private static var _freeTimes:uint;
      
      private static var _leftTimes:uint;
      
      private static var alarmMC:MovieClip;
      
      private static var fun1:Function;
      
      private static var fun2:Function;
       
      
      public function GiraudSuperEvoControl()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var i:int;
         var map:BaseMapProcess = param1;
         _map = map;
         isHit = false;
         if(MainManager.actorInfo.isVip)
         {
            _freeTimes = 10;
         }
         else
         {
            _freeTimes = 8;
         }
         i = 0;
         while(i < 8)
         {
            _map.conLevel["petMc_" + i].visible = false;
            _map.conLevel["movePoint_" + i].visible = false;
            _map.conLevel["petMc_" + i].mouseChildren = false;
            _map.conLevel["petMc_" + i].buttonMode = true;
            _map.conLevel["petMc_" + i].addEventListener(MouseEvent.CLICK,onFight);
            i++;
         }
         ToolBarController.panel.hide();
         ToolBarController.showOrHideAllUser(false);
         LevelManager.iconLevel.visible = false;
         _map.depthLevel.mouseChildren = false;
         _map.depthLevel.mouseEnabled = false;
         buttonMC = MapManager.currentMap.libManager.getMovieClip("buttonMC");
         buttonMC.exitFlag.visible = false;
         buttonMC.addEventListener(MouseEvent.CLICK,onButton);
         LevelManager.appLevel.addChild(buttonMC);
         upData(function():void
         {
            LevelManager.stage.addEventListener(Event.ENTER_FRAME,onEnterFrame);
         });
         upDataGetAward();
         _map.topLevel["blackBg"].blendMode = BlendMode.LAYER;
         _map.topLevel["blackBg"].mouseChildren = false;
         _map.topLevel["blackBg"].mouseEnabled = false;
         _map.topLevel["blackBg"].alpha = 0.9;
         _map.topLevel["blackBg"].cacheAsBitmap = false;
         seerCircle = MapManager.currentMap.libManager.getMovieClip("LightCircle");
         seerCircle.scaleX = 2;
         seerCircle.scaleY = 2;
         seerCircle.x = MainManager.actorModel.pos.x - seerCircle.width * 0.5;
         seerCircle.y = MainManager.actorModel.pos.y - seerCircle.height * 0.5;
         seerCircle.mouseChildren = seerCircle.mouseEnabled = false;
         _map.topLevel.addChild(seerCircle);
         seerCircle.blendMode = BlendMode.ERASE;
         MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,walkHandler);
      }
      
      private static function upData(param1:Function = null) : void
      {
         var fun:Function = param1;
         KTool.getMultiValue([5744,15696,15697],function(param1:Array):void
         {
            _leftTimes = _freeTimes + param1[2] - param1[1];
            if(buttonMC)
            {
               KTool.showScore(buttonMC.timesLeft,_leftTimes);
            }
            bossState = param1[0];
            var _loc2_:int = 0;
            while(_loc2_ < 8)
            {
               if(_loc2_ < param1[0])
               {
                  if(_map.typeLevel["block_" + _loc2_])
                  {
                     DisplayUtil.removeForParent(_map.typeLevel["block_" + _loc2_]);
                  }
                  if(_map.conLevel["petMc_" + _loc2_])
                  {
                     DisplayUtil.removeForParent(_map.conLevel["petMc_" + _loc2_]);
                  }
                  if(_map.conLevel["movePoint_" + _loc2_])
                  {
                     DisplayUtil.removeForParent(_map.conLevel["movePoint_" + _loc2_]);
                  }
               }
               else if(_loc2_ == param1[0])
               {
                  if(fightStatus)
                  {
                     _map.conLevel["petMc_" + _loc2_].visible = true;
                     _map.conLevel["movePoint_" + _loc2_].visible = true;
                  }
               }
               else
               {
                  _map.conLevel["petMc_" + _loc2_].visible = false;
                  _map.conLevel["movePoint_" + _loc2_].visible = false;
               }
               _loc2_++;
            }
            if(param1[0] >= 8)
            {
               CommonUI.setEnabled(buttonMC["oneKeyBtn"],false);
               DisplayUtil.removeForParent(_map.topLevel["blackBg"]);
               buttonMC.exitFlag.visible = true;
               buttonMC.closeMc.gotoAndStop(2);
               Alarm2.show("你可以进入下一关了！");
               return;
            }
            if(param1[0] >= 4)
            {
               if(MapManager.currentMap.id == 10886)
               {
                  MapManager.changeMap(10887);
                  return;
               }
            }
            MapManager.currentMap.makeMapArray();
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      private static function upDataGetAward() : void
      {
         KTool.getBitSet([17693],function(param1:Array):void
         {
            if(param1[0] > 0)
            {
               DisplayUtil.removeForParent(buttonMC.freeMc);
            }
            getItemNum();
         });
      }
      
      private static function walkHandler(param1:RobotEvent) : void
      {
         if(Boolean(seerCircle) && Boolean(MainManager.actorModel.visible))
         {
            seerCircle.x = MainManager.actorModel.pos.x - seerCircle.width * 0.5;
            seerCircle.y = MainManager.actorModel.pos.y - seerCircle.height * 0.5;
         }
      }
      
      private static function getItemNum() : void
      {
         ItemManager.upDateCollection(1704564,function():void
         {
            itemNum = ItemManager.getNumByID(1704564);
            if(buttonMC)
            {
               KTool.showScore(buttonMC.txtLeft,itemNum);
            }
         });
      }
      
      private static function buyItem(param1:int, param2:int, param3:Function = null) : void
      {
         var productID:int = param1;
         var exchangeID:int = param2;
         var fun:Function = param3;
         KTool.buyProductByCallback(productID,1,function():void
         {
            KTool.doExchange(exchangeID,function():void
            {
               if(fun != null)
               {
                  fun();
               }
            });
         });
      }
      
      private static function onEnterFrame(param1:Event) : void
      {
         if(bossState >= 8)
         {
            LevelManager.stage.removeEventListener(Event.ENTER_FRAME,onEnterFrame);
            return;
         }
         if(Boolean(HitTestDuplicate.complexHitTestObject(_map.conLevel["movePoint_" + bossState],MainManager.actorModel.sprite)) && fightStatus == false)
         {
            LevelManager.stage.removeEventListener(Event.ENTER_FRAME,onEnterFrame);
            if(!isHit)
            {
               isHit = true;
               CommonUI.addYellowExcal(_map.conLevel,_map.conLevel["petMc_" + bossState].x + 30,_map.conLevel["petMc_" + bossState].y - 10);
               showAlarm(1);
            }
         }
      }
      
      private static function onButton(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.target)
         {
            case buttonMC["cureBtn"]:
               PetManager.cureAll();
               break;
            case buttonMC["bagBtn"]:
               PetBagControllerNew.show();
               break;
            case buttonMC["vipBtn"]:
               LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
               break;
            case buttonMC["buyBtn"]:
               buyItem(243329,5558,function():void
               {
                  getItemNum();
               });
               break;
            case buttonMC["buyBtn1"]:
               buyItem(243330,5556,function():void
               {
                  upData();
               });
               break;
            case buttonMC["oneKeyBtn"]:
               KTool.buyProductByCallback(243318,1,function():void
               {
                  SocketConnection.sendWithCallback(43602,function(param1:SocketEvent):void
                  {
                     upData();
                  },3,2);
               });
               break;
            case buttonMC.closeMc["exitBtn"]:
               KTool.changeMapWithCallBack(1081,function():void
               {
                  ModuleManager.showAppModule("GiraudSuperEvoMainPanel");
               });
               break;
            case buttonMC.closeMc["nextBtn"]:
               KTool.changeMapWithCallBack(1081,function():void
               {
                  ModuleManager.showAppModule("GiraudSuperEvoThirdGatePanel");
               });
               break;
            case buttonMC.freeMc["freeGetBtn"]:
               KTool.doExchange(5554,function():void
               {
                  upDataGetAward();
               });
         }
      }
      
      private static function onFight(param1:MouseEvent) : void
      {
         var a:Array;
         var i:int = 0;
         var e:MouseEvent = param1;
         if(_leftTimes < 1)
         {
            Alarm2.show("你已经没有挑战次数了！");
            return;
         }
         a = String(e.target.name).split("_");
         i = int(a[1]);
         fightStatus = true;
         MainManager.actorModel.moveAndAction(new Point(_map.conLevel["movePoint_" + i].x,_map.conLevel["movePoint_" + i].y),function():void
         {
            var region:int = 3773 + i;
            FightManager.fightNoMapBoss("",region);
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
            {
               var info:FightOverInfo;
               var e:PetFightEvent = param1;
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
               info = e.dataObj as FightOverInfo;
               if(info.winnerID != MainManager.actorID)
               {
                  getDefinitionByName("com.robot.app2.mapProcess.control.GiraudSuperEvoControl").fightStatus = true;
                  upData(function():void
                  {
                     showAlarm(2);
                  });
               }
               else
               {
                  getDefinitionByName("com.robot.app2.mapProcess.control.GiraudSuperEvoControl").fightStatus = false;
                  upData(function():void
                  {
                     LevelManager.stage.addEventListener(Event.ENTER_FRAME,onEnterFrame);
                  });
               }
            });
         });
      }
      
      public static function destroy() : void
      {
         MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,walkHandler);
         buttonMC.removeEventListener(MouseEvent.CLICK,onButton);
         buttonMC = null;
         LevelManager.stage.removeEventListener(Event.ENTER_FRAME,onEnterFrame);
         if(alarmMC)
         {
            alarmMC.removeEventListener(MouseEvent.CLICK,onAlarm);
            alarmMC = null;
         }
         var _loc1_:int = 0;
         while(_loc1_ < 8)
         {
            if(_map.conLevel["petMc_" + _loc1_])
            {
               _map.conLevel["petMc_" + _loc1_].removeEventListener(MouseEvent.CLICK,onFight);
            }
            _loc1_++;
         }
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.show();
         ToolBarController.showOrHideAllUser(true);
      }
      
      private static function showAlarm(param1:int) : void
      {
         if(alarmMC == null)
         {
            alarmMC = MapManager.currentMap.libManager.getMovieClip("alarmMC");
            alarmMC.addEventListener(MouseEvent.CLICK,onAlarm);
         }
         alarmMC["mainMc"].gotoAndStop(param1);
         LevelManager.appLevel.addChild(alarmMC);
         if(param1 != 3)
         {
            KTool.showScore(alarmMC.mainMc.txtLeft,itemNum);
         }
      }
      
      private static function onAlarm(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "applyBtn":
               if(itemNum < 1)
               {
                  Alarm2.show("你已经没有波动灵魄了哦！");
                  return;
               }
               SocketConnection.sendWithCallback(43602,function(param1:SocketEvent):void
               {
                  var e:SocketEvent = param1;
                  isHit = false;
                  fightStatus = false;
                  upData(function():void
                  {
                     LevelManager.stage.addEventListener(Event.ENTER_FRAME,onEnterFrame);
                  });
                  getItemNum();
                  DisplayUtil.removeForParent(alarmMC);
                  CommonUI.removeYellowExcal(_map.conLevel);
               },5,bossState + 1);
               break;
            case "close_btn":
            case "noBtn":
               DisplayUtil.removeForParent(alarmMC);
               if(_map.conLevel)
               {
                  if(_map.conLevel["petMc_" + bossState])
                  {
                     _map.conLevel["petMc_" + bossState].visible = true;
                  }
                  if(_map.conLevel["movePoint_" + bossState])
                  {
                     _map.conLevel["movePoint_" + bossState].visible = true;
                  }
               }
               if(alarmMC.mainMc.currentFrame == 3)
               {
                  if(MapManager.currentMap.id == 10886)
                  {
                     MapManager.changeMap(10887);
                  }
               }
               break;
            case "buyBtn":
               buyItem(243329,5558,function():void
               {
                  ++itemNum;
                  KTool.showScore(alarmMC.mainMc.txtLeft,itemNum);
                  getItemNum();
               });
         }
      }
      
      public static function playStroy(param1:uint, param2:Function = null) : void
      {
         var storyPlayer:TaskStoryPlayer = null;
         var index:uint = param1;
         var fun:Function = param2;
         var story:Array = [];
         switch(index)
         {
            case 0:
               story = [[TaskStoryPlayer.DIALOG,[NPC.NITIANKUANGZHANG,["吉罗，我等你很久了，敢接受我的挑战吗？"],["小心！他有点强大！"]]],[TaskStoryPlayer.DIALOG,[NPC.JILUO,["如果你执意挑战的话，可以试一试，作为一个赛尔，总不能一直捏软柿子。"],["好！姑且一战！",".....我换一个。"]]]];
               break;
            case 1:
               story = [[TaskStoryPlayer.DIALOG,[NPC.XILINDUN,["我的魔法......一点都不强大，你不用紧张。"],["虚伪！他的实力远在你之上！"]]],[TaskStoryPlayer.DIALOG,[NPC.JILUO,["我奉劝你还是不要攻击他，他确实很厉害！"],["不！一定要打！","......我换一个。"]]]];
               break;
            case 2:
               story = [[TaskStoryPlayer.DIALOG,[NPC.MOSITER,["初次见面，我是莫希特，你可以挑战我。"],["他.....并没有攻击性，难道是我迟钝了？"]]],[TaskStoryPlayer.DIALOG,[NPC.JILUO,["额.....我感受不到他的杀气。也许比较简单吧。"],["我来试试！","......我换一个。"]]]];
               break;
            case 3:
               story = [[TaskStoryPlayer.DIALOG,[NPC.HISER,["我绝对是一个让你惧怕的对手。"],["光有杀气，没有实力....."]]],[TaskStoryPlayer.DIALOG,[NPC.JILUO,["虚张声势的话谁都会讲，击败他！"],["好！","......我换一个。"]]]];
               break;
            case 4:
               story = [[TaskStoryPlayer.DIALOG,[NPC.PUCK_NASI,["我渴望有价值的对手，你是吗？"],["......有点意思，连我都想和他过过招。"]]],[TaskStoryPlayer.DIALOG,[NPC.JILUO,["要不我把这个机会让给你先？"],["那就我先来吧！","......我换一个。"]]]];
               break;
            case 5:
               story = [[TaskStoryPlayer.DIALOG,[NPC.MODIXISI,["你知道如何成为一个出色的杀手吗？首先，你要够普通。"],["但你绝不普通。"]]],[TaskStoryPlayer.DIALOG,[NPC.JILUO,["他并不普通，小心他的能力，见好就收。"],["知道了！","......我换一个。"]]]];
         }
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            if(fun != null)
            {
               fun();
            }
         };
         storyPlayer.start();
      }
   }
}
