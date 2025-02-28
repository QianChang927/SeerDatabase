package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.alert.CustomAlarm;
   import com.robot.core.utils.BitUtils;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   
   public class XuanWuEvoFightController
   {
      
      public static var currLayer:int = 0;
      
      public static var status:Array = [0,0,0];
      
      private static var bossList:Array = [];
      
      private static var bossContainer:Sprite;
      
      private static var mcDoor:MovieClip;
      
      private static var failPanel:MovieClip;
       
      
      public function XuanWuEvoFightController()
      {
         super();
      }
      
      public static function init() : void
      {
         var arr:Array;
         var paramArr:ByteArray;
         var num:int = 0;
         bossList = [];
         bossContainer = new Sprite();
         MapManager.currentMap.depthLevel.addChild(bossContainer);
         arr = [537,538,539,541];
         paramArr = new ByteArray();
         for each(num in arr)
         {
            paramArr.writeInt(num);
         }
         SocketConnection.sendByQueue(CommandID.SAROD_PROVE_PLAYER_INFO,[arr.length,paramArr],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.position = 0;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:Array = new Array();
            var _loc5_:int = 0;
            while(_loc5_ < _loc3_)
            {
               _loc4_.push(_loc2_.readUnsignedInt());
               _loc5_++;
            }
            status = _loc4_;
            initBoss();
         });
         addDoor();
         updateMapName();
      }
      
      private static function updateMapName() : void
      {
         var _loc1_:Array = ["一","二","三","四","五","六","七","八","九","十"];
         MapNamePanel.nameText = "地宫" + _loc1_[currLayer] + "层";
      }
      
      private static function addDoor() : void
      {
         ResourceManager.getResource(ClientConfig.getAppRes("xuanwufightdoor"),function(param1:MovieClip):void
         {
            mcDoor = param1;
            MapManager.currentMap.btnLevel.addChild(param1);
            mcDoor.addEventListener(MouseEvent.CLICK,onClickDoor);
            ToolTipManager.add(mcDoor["btnExit"],"结束挑战");
            ToolTipManager.add(mcDoor["btnNext"],"前往下一层");
         });
      }
      
      protected static function onClickDoor(param1:MouseEvent) : void
      {
         var flag0:int = 0;
         var flag1:int = 0;
         var event:MouseEvent = param1;
         if(event.target.name == "btnNext")
         {
            flag0 = int(BitUtils.getBit(status[0],currLayer * 2));
            flag1 = int(BitUtils.getBit(status[0],currLayer * 2 + 1));
            if(flag0 > 0 && flag1 > 0)
            {
               ++currLayer;
               if(currLayer < 10)
               {
                  MapManager.changeMap(10913 + currLayer % 2);
               }
               else
               {
                  MapManager.changeMap(10915);
               }
            }
            else
            {
               ResourceManager.getResource(ClientConfig.getAppRes("xuanwufightNext"),function(param1:MovieClip):void
               {
                  var mc:MovieClip = param1;
                  CustomAlarm.show(mc,null,[function():void
                  {
                     KTool.buyProductByCallback(243788,1,function():void
                     {
                        SocketConnection.sendWithCallback(47212,function(param1:SocketEvent):void
                        {
                           ++currLayer;
                           if(currLayer < 10)
                           {
                              MapManager.changeMap(10913 + currLayer % 2);
                           }
                           else
                           {
                              MapManager.changeMap(10915);
                           }
                        },3,currLayer + 1);
                     });
                  }]);
               });
            }
         }
         else if(event.target.name == "btnExit")
         {
            Alert.show("你确定要直接结束本次玄武挑战吗？",function():void
            {
               SocketConnection.sendWithCallback(47212,function(param1:SocketEvent):void
               {
                  MapManager.changeMap(1093);
                  currLayer = 0;
               },4,0);
            });
         }
      }
      
      private static function initBoss() : void
      {
         addBoss();
      }
      
      public static function startGame() : void
      {
         currLayer = 0;
      }
      
      private static function addBoss() : void
      {
         var _loc5_:int = 0;
         var _loc1_:Array = [[2440,2759],[2603,2625],[2666,2640],[2756,2707],[2438,2500],[2792,2726],[2702,2461],[2718,2530],[2536,2685],[2523,2591]];
         var _loc2_:Array = [new Point(380,430),new Point(666,408)];
         var _loc3_:Array = _loc1_[currLayer];
         var _loc4_:int = 0;
         while(_loc4_ < 2)
         {
            if((_loc5_ = int(BitUtils.getBit(status[0],currLayer * 2 + _loc4_))) == 0)
            {
               loadBoss(_loc3_[_loc4_],_loc2_[_loc4_],currLayer * 2 + _loc4_);
            }
            _loc4_++;
         }
      }
      
      private static function loadBoss(param1:uint, param2:Point, param3:int) : void
      {
         var loadComHandler:Function = null;
         var id:uint = param1;
         var pos:Point = param2;
         var index:int = param3;
         loadComHandler = function(param1:DisplayObject):void
         {
            var mc:MovieClip = null;
            var dis:DisplayObject = param1;
            mc = dis as MovieClip;
            if(mc)
            {
               mc.gotoAndStop("down");
               mc.addEventListener(Event.ENTER_FRAME,function():void
               {
                  var _loc2_:MovieClip = mc.getChildAt(0) as MovieClip;
                  if(_loc2_)
                  {
                     _loc2_.gotoAndStop(1);
                     mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                  }
               });
               mc.x = pos.x;
               mc.y = pos.y;
               mc.scaleX = 2;
               mc.scaleY = 2;
               mc.index = index;
               mc.buttonMode = true;
               bossContainer.addChild(mc);
               mc.addEventListener(MouseEvent.CLICK,onClickBoss);
            }
         };
         var url:String = String(ClientConfig.getPetSwfPath(id));
         ResourceManager.getResource(url,loadComHandler,"pet");
      }
      
      protected static function onClickBoss(param1:MouseEvent) : void
      {
         var mc:MovieClip;
         var index:int = 0;
         var event:MouseEvent = param1;
         if(BitUtils.getBit(status[3],0) > 0)
         {
            showRevole();
            return;
         }
         mc = event.currentTarget as MovieClip;
         index = int(mc.index);
         Alert.show("你确定要开始挑战此对手吗？只有战胜此层的所有对手才能进入下一层哦！",function():void
         {
            fight(index);
         });
      }
      
      protected static function fight(param1:int) : void
      {
         var count:int = 0;
         var onFight:Function = null;
         var index:int = param1;
         onFight = function(param1:*):void
         {
            var e:* = param1;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
            if((e.dataObj as FightOverInfo).winnerID != MainManager.actorID && count == 0)
            {
               count = 1;
               if(status[1] < 5)
               {
                  StatManager.sendStat2014("0703玄武超进化","打开原地复活面板",StatManager.RUN_ACT_2015);
                  showRevole();
               }
               else
               {
                  Alarm2.show("本次玄武挑战中，你已经用完了所有的复活次数（共5次），挑战失败！",function():void
                  {
                     SocketConnection.sendWithCallback(47212,function(param1:SocketEvent):void
                     {
                        MapManager.changeMap(1093);
                        currLayer = 0;
                     },4,0);
                  });
               }
            }
         };
         var startBoss:int = 4175;
         FightManager.fightNoMapBoss("",startBoss + index);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFight);
         count = 0;
      }
      
      private static function showRevole() : void
      {
         if(failPanel)
         {
            LevelManager.fightLevel.addChild(failPanel);
         }
         else
         {
            failPanel = new MovieClip();
            ResourceManager.getResource(ClientConfig.getAppRes("xuanwufightfail"),function(param1:MovieClip):void
            {
               failPanel = param1;
               SimpleButton(failPanel["btn_0"]).addEventListener(MouseEvent.CLICK,onClickRevole);
               SimpleButton(failPanel["btn_1"]).addEventListener(MouseEvent.CLICK,onClickCancel);
               LevelManager.fightLevel.addChild(failPanel);
            });
         }
      }
      
      private static function onClickRevole(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(Boolean(failPanel) && Boolean(failPanel.parent))
         {
            failPanel.parent.removeChild(failPanel);
         }
         KTool.buyProductByCallback(243787,1,function():void
         {
            SocketConnection.sendWithCallback(47212,function(param1:SocketEvent):void
            {
               ++status[1];
               status[3] = 0;
            },5,0);
         },null,function():void
         {
            SocketConnection.sendWithCallback(47212,function(param1:SocketEvent):void
            {
               MapManager.changeMap(1093);
            },4,0);
         });
      }
      
      private static function onClickCancel(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(Boolean(failPanel) && Boolean(failPanel.parent))
         {
            failPanel.parent.removeChild(failPanel);
         }
         Alert.show("你确定要放弃复活机会吗？放弃后本次玄武挑战将直接结束！",function():void
         {
            SocketConnection.sendWithCallback(47212,function(param1:SocketEvent):void
            {
               MapManager.changeMap(1093);
               currLayer = 0;
            },4,0);
         },showRevole);
      }
      
      public static function destroy() : void
      {
         var _loc2_:MovieClip = null;
         ToolTipManager.remove(mcDoor["btnExit"]);
         ToolTipManager.remove(mcDoor["btnNext"]);
         if(failPanel)
         {
            SimpleButton(failPanel["btn_0"]).addEventListener(MouseEvent.CLICK,onClickRevole);
            SimpleButton(failPanel["btn_1"]).addEventListener(MouseEvent.CLICK,onClickCancel);
            failPanel = null;
         }
         failPanel = null;
         var _loc1_:int = 0;
         while(_loc1_ < bossContainer.numChildren)
         {
            _loc2_ = bossContainer.getChildAt(_loc1_) as MovieClip;
            if(_loc2_)
            {
               _loc2_.removeEventListener(MouseEvent.CLICK,onClickBoss);
            }
            _loc1_++;
         }
      }
   }
}
