package com.robot.app.mapProcess
{
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.DialogBox;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.HitTest;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.utils.Timer;
   import org.taomee.component.control.MLoadPane;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_510 extends BaseMapProcess
   {
       
      
      private var _timer:Timer;
      
      private var _stopTimer:Timer;
      
      private var _gameType:int;
      
      private var _hasHit:Boolean;
      
      private var _isCarStop:Boolean;
      
      private var _index:int;
      
      private var _carHitCount:int;
      
      private var _stone:Array;
      
      private var _star:Array;
      
      private var _stoneArray:Array;
      
      private var _pet:MovieClip;
      
      private var _isSwimStop:Boolean;
      
      private var _swimHitCount:int;
      
      private var _isClick:Boolean;
      
      private var _isSwimBack:Boolean;
      
      private const _pointArray:Array = [236,290,570,300,820,360,300,470,540,370];
      
      private const _starArray:Array = [544,196,626,128,614,152,506,120,188,46,188,120,190,6,124,44];
      
      private const _npcDialog:Array = ["你敢给我10000张奖券么？说不定我心情好，就告诉你地心的秘密！","来我的兑换亭看看吧，相信我，你值得拥有！","听说贾斯丁和茜茜也要来，难道他们……嘻嘻嘻嘻嘻……","水球，你别跑，我一定要把你捉住！","那边的那个小子，你的精灵不行啊，还得好好练练！","听说罗开今天拿了10000张奖券！兑换了10000只水球！啊，什么都是浮云啊！","我这里有8.5折的钻石道具哦！","我这里有8.5折的钻石道具哦！","我这里有8.5折的钻石道具哦！","我这里有8.5折的钻石道具哦！"];
      
      private var _shop:AppModel;
      
      private var _broad:AppModel;
      
      private var _frame:int = 2;
      
      public function MapProcess_510()
      {
         super();
      }
      
      override protected function init() : void
      {
         ToolTipManager.add(conLevel["shop_btn"],"欢乐谷兑换站");
         ToolTipManager.add(conLevel["intro_btn"],"欢乐谷小贴士");
         ToolTipManager.add(conLevel["car_btn"],"欢乐谷管理员");
         ToolTipManager.add(conLevel["car_btn"],"藤蔓过山车");
         ToolTipManager.add(conLevel["rocket_btn"],"火箭飞弹");
         ToolTipManager.add(conLevel["swim_btn"],"障碍游泳");
         conLevel["shop_btn"].addEventListener(MouseEvent.CLICK,this.onShopClick);
         conLevel["intro_btn"].addEventListener(MouseEvent.CLICK,this.onIntroClick);
         conLevel["rocketColor_mc"].visible = false;
         conLevel["pet_mc"].visible = false;
         this._stoneArray = [conLevel["stone_0"],conLevel["stone_1"],conLevel["stone_2"],conLevel["stone_3"],conLevel["stone_4"],conLevel["stone_5"],conLevel["stone_6"],conLevel["stone_7"]];
         conLevel["wood_1"].buttonMode = true;
         conLevel["wood_1"].mouseChildren = false;
         conLevel["wood_1"].addEventListener(MouseEvent.CLICK,this.onWoodClick);
         conLevel["wood_2"].buttonMode = true;
         conLevel["wood_2"].mouseChildren = false;
         conLevel["wood_2"].addEventListener(MouseEvent.CLICK,this.onWoodClick);
         conLevel["wood_3"].buttonMode = true;
         conLevel["wood_3"].mouseChildren = false;
         conLevel["wood_3"].addEventListener(MouseEvent.CLICK,this.onWoodClick);
         this._timer = new Timer(6000);
         this._timer.addEventListener(TimerEvent.TIMER,this.onTimer);
         this._stopTimer = new Timer(1000);
         this._stopTimer.addEventListener(TimerEvent.TIMER,this.onStopTimer);
         this._timer.start();
         this.showDialog("你好，" + MainManager.actorInfo.nick + "，欢迎来到精灵欢乐谷！");
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         var _loc2_:int = Math.floor(Math.random() * 5);
         conLevel["petAnimate"].x = this._pointArray[_loc2_ * 2];
         conLevel["petAnimate"].y = this._pointArray[_loc2_ * 2 + 1];
         conLevel["petAnimate"].gotoAndPlay(2);
         if(this._timer.delay == 6000)
         {
            this._timer.reset();
            this._timer.delay = 30000;
            this._timer.start();
            this.showDialog("在这里，可以带上你的精灵参加游戏，获取奖券，就能到我这里兑换奖品！");
         }
         else
         {
            this.showDialog(this._npcDialog[Math.floor(Math.random() * 10)]);
         }
      }
      
      private function showDialog(param1:String) : void
      {
         var _loc2_:DialogBox = new DialogBox();
         _loc2_.show(param1,50,0,conLevel["npc_btn"]);
      }
      
      public function onNpcClick() : void
      {
         NpcDialog.show(NPC.HAPPYVALLEYADMIN,["你好，" + MainManager.actorInfo.nick + "，欢迎来到精灵欢乐谷！"],["你好，我想了解下有什么好玩的呀？"],[function():void
         {
            NpcDialog.show(NPC.HAPPYVALLEYADMIN,["这里共有3个项目，需要带相关系的精灵才能进行游戏。"],["那要怎么获得奖品呢？"],[function():void
            {
               NpcDialog.show(NPC.HAPPYVALLEYADMIN,["很简单！玩游戏，获得量子碎片！特别申明！只有携带超能NONO才能兑换到本期派对精灵哟！看看我身边的兑换展示台吧～"],["好的，我知道了。"],[function():void
               {
                  NpcDialog.show(NPC.HAPPYVALLEYADMIN,["还有什么问题的话，直接看看旁边的活动指南吧。"],["好的。"]);
               }]);
            }]);
         }]);
      }
      
      private function onShopClick(param1:MouseEvent) : void
      {
         if(!this._shop)
         {
            this._shop = new AppModel(ClientConfig.getAppModule("HappyValleyShopPanel"),"正在加载面板");
            this._shop.setup();
            this._shop.sharedEvents.addEventListener("BUY_PET_1118",this.onBuyPet);
         }
         this._shop.show();
      }
      
      private function onBuyPet(param1:Event) : void
      {
         var e:Event = param1;
         PetManager.refreshStorageList();
         AnimateManager.playFullScreenAnimate("resource/bounsMovie/map_432.swf",function():void
         {
            Alarm.show("一只<font color=\'#ff0000\'>水球</font>放入了你的精灵仓库中。");
         });
      }
      
      private function onIntroClick(param1:MouseEvent) : void
      {
         if(!this._broad)
         {
            this._broad = new AppModel(ClientConfig.getAppModule("HappyValleyIntroPanel"),"正在加载面板");
            this._broad.setup();
         }
         this._broad.show();
      }
      
      public function onCarClick() : void
      {
         var i:int = 0;
         SocketConnection.send(1022,86053882);
         if(this._gameType == 0)
         {
            if(MainManager.actorModel.pet)
            {
               if(PetXMLInfo.getTypeCN(MainManager.actorModel.pet.info.petID) == "草")
               {
                  this._gameType = 1;
                  this._stone = [];
                  this._star = [];
                  conLevel["car_btn"].visible = false;
                  MainManager.actorModel.pet.visible = false;
                  while(i < 4)
                  {
                     if(Math.random() <= 0.5)
                     {
                        this._stone.push(this._stoneArray[i * 2]);
                        this._star.push(this._starArray[i * 4]);
                        this._star.push(this._starArray[i * 4 + 1]);
                     }
                     else
                     {
                        this._stone.push(this._stoneArray[i * 2 + 1]);
                        this._star.push(this._starArray[i * 4 + 2]);
                        this._star.push(this._starArray[i * 4 + 3]);
                     }
                     this._stone[i].buttonMode = true;
                     this._stone[i].mouseChildren = false;
                     this._stone[i].addEventListener(MouseEvent.CLICK,this.onStoneClick);
                     i++;
                  }
                  SocketConnection.addCmdListener(CommandID.JOIN_GAME,function(param1:SocketEvent):void
                  {
                     SocketConnection.removeCmdListener(CommandID.JOIN_GAME,arguments.callee);
                     conLevel["car_mc"].addEventListener(Event.ENTER_FRAME,onCarEnterFrame);
                     conLevel["car_mc"].gotoAndPlay(2);
                  });
                  SocketConnection.send(CommandID.JOIN_GAME,1);
               }
               else
               {
                  NpcDialog.show(NPC.HAPPYVALLEYADMIN,["把0xff0000草系精灵0xffffff带在身边才能进行藤蔓过山车游戏哦！"],["知道了。"]);
               }
            }
            else
            {
               NpcDialog.show(NPC.HAPPYVALLEYADMIN,["把0xff0000草系精灵0xffffff带在身边才能进行藤蔓过山车游戏哦！"],["知道了。"]);
            }
         }
      }
      
      public function onCarEnterFrame(param1:Event) : void
      {
         var _loc2_:int = 0;
         if(this._gameType != 1)
         {
            return;
         }
         if(!this._hasHit)
         {
            if(conLevel["car_mc"].currentFrame == 10)
            {
               this.playStoneMC(this._stone[0]["mc"]);
            }
            else if(conLevel["car_mc"].currentFrame == 70)
            {
               this.playStoneMC(this._stone[1]["mc"]);
            }
            else if(conLevel["car_mc"].currentFrame == 130)
            {
               this.playStoneMC(this._stone[2]["mc"]);
            }
            else if(conLevel["car_mc"].currentFrame == 190)
            {
               this.playStoneMC(this._stone[3]["mc"]);
            }
            else if(conLevel["car_mc"].currentFrame == 265)
            {
               if(this._carHitCount == 0)
               {
                  this.carGameComplete(10);
               }
               else if(this._carHitCount < 2)
               {
                  this.carGameComplete(8);
               }
               else
               {
                  this.carGameComplete(5);
               }
            }
            while(_loc2_ < 4)
            {
               if(HitTest.hitTest(this._stone[_loc2_] as MovieClip,conLevel["car_mc"] as MovieClip,conLevel))
               {
                  this._hasHit = true;
                  this._index = _loc2_;
                  ++this._carHitCount;
               }
               _loc2_++;
            }
         }
         else if(this._frame != 0)
         {
            conLevel["car_mc"].gotoAndStop(conLevel["car_mc"].currentFrame - this._frame);
            --this._frame;
         }
         else if(!this._isCarStop)
         {
            this._isCarStop = true;
            this._stopTimer.start();
            conLevel["star_mc"].x = this._star[this._index * 2];
            conLevel["star_mc"].y = this._star[this._index * 2 + 1];
         }
      }
      
      private function playStoneMC(param1:MovieClip) : void
      {
         var mc:MovieClip = param1;
         if(mc)
         {
            mc.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
            {
               if(mc.currentFrame == mc.totalFrames)
               {
                  mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               }
            });
            mc.gotoAndPlay(2);
         }
      }
      
      private function onStoneClick(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.target as MovieClip;
         _loc2_.removeEventListener(MouseEvent.CLICK,this.onStoneClick);
         _loc2_.gotoAndStop(2);
      }
      
      private function onStopTimer(param1:TimerEvent) : void
      {
         this._stopTimer.reset();
         this._frame = 2;
         this._isCarStop = false;
         this._hasHit = false;
         conLevel["car_mc"].play();
         conLevel["star_mc"].x = -100;
         conLevel["star_mc"].y = 0;
      }
      
      private function carGameComplete(param1:int) : void
      {
         var _loc2_:int = 0;
         this._gameType = 0;
         this._carHitCount = 0;
         while(_loc2_ < 4)
         {
            this._stone[_loc2_].gotoAndStop(1);
            this._stone[_loc2_].removeEventListener(MouseEvent.CLICK,this.onStoneClick);
            _loc2_++;
         }
         conLevel["car_mc"].removeEventListener(Event.ENTER_FRAME,this.onCarEnterFrame);
         conLevel["car_mc"].gotoAndStop(1);
         conLevel["car_btn"].visible = true;
         MainManager.actorModel.pet.visible = true;
         SocketConnection.send(CommandID.GAME_OVER,100,param1);
      }
      
      public function onRocketClick() : void
      {
         SocketConnection.send(1022,86053883);
         if(this._gameType == 0)
         {
            if(MainManager.actorModel.pet)
            {
               if(PetXMLInfo.getTypeCN(MainManager.actorModel.pet.info.petID) == "火")
               {
                  SocketConnection.addCmdListener(CommandID.JOIN_GAME,function(param1:SocketEvent):void
                  {
                     var e:SocketEvent = param1;
                     SocketConnection.removeCmdListener(CommandID.JOIN_GAME,arguments.callee);
                     _gameType = 1;
                     conLevel["rocket_btn"].visible = false;
                     MainManager.actorModel.pet.visible = false;
                     AnimateManager.playMcAnimate(conLevel["rocketBtn_mc"],0,"",function():void
                     {
                        conLevel["rocket_btn"].visible = true;
                        conLevel["rocketColor_mc"].visible = true;
                        conLevel["rocketColor_mc"].gotoAndPlay(1);
                     });
                  });
                  SocketConnection.send(CommandID.JOIN_GAME,2);
               }
               else
               {
                  NpcDialog.show(NPC.HAPPYVALLEYADMIN,["把0xff0000火系精灵0xffffff带在身边才能进行火箭飞弹游戏哦！"],["知道了。"]);
               }
            }
            else
            {
               NpcDialog.show(NPC.HAPPYVALLEYADMIN,["把0xff0000火系精灵0xffffff带在身边才能进行火箭飞弹游戏哦！"],["知道了。"]);
            }
         }
         else if(this._gameType == 1)
         {
            conLevel["rocket_btn"].visible = false;
            conLevel["rocketColor_mc"].stop();
            if(conLevel["rocketColor_mc"].currentFrame < 4)
            {
               AnimateManager.playMcAnimate(conLevel["rocket_mc"],2,"mc_1",function():void
               {
                  rocketGameComplete(5);
               });
            }
            else if(conLevel["rocketColor_mc"].currentFrame > 6)
            {
               AnimateManager.playMcAnimate(conLevel["rocket_mc"],4,"mc_3",function():void
               {
                  rocketGameComplete(10);
               });
            }
            else
            {
               AnimateManager.playMcAnimate(conLevel["rocket_mc"],3,"mc_2",function():void
               {
                  rocketGameComplete(8);
               });
            }
         }
      }
      
      private function rocketGameComplete(param1:int) : void
      {
         var timer:Timer = null;
         var result:int = param1;
         timer = new Timer(2000);
         timer.addEventListener(TimerEvent.TIMER,function(param1:TimerEvent):void
         {
            timer.reset();
            timer.removeEventListener(TimerEvent.TIMER,arguments.callee);
            timer = null;
            _gameType = 0;
            conLevel["rocket_btn"].visible = true;
         });
         timer.start();
         conLevel["rocket_mc"].gotoAndStop(1);
         conLevel["rocketBtn_mc"].gotoAndStop(1);
         conLevel["rocketColor_mc"].visible = false;
         MainManager.actorModel.pet.visible = true;
         SocketConnection.send(CommandID.GAME_OVER,100,result);
      }
      
      public function onSwimClick() : void
      {
         SocketConnection.send(1022,86053884);
         if(this._gameType == 0)
         {
            if(MainManager.actorModel.pet)
            {
               if(PetXMLInfo.getTypeCN(MainManager.actorModel.pet.info.petID) == "水")
               {
                  SocketConnection.addCmdListener(CommandID.JOIN_GAME,function(param1:SocketEvent):void
                  {
                     var e:SocketEvent = param1;
                     SocketConnection.removeCmdListener(CommandID.JOIN_GAME,arguments.callee);
                     _gameType = 3;
                     MainManager.actorModel.pet.visible = false;
                     ResourceManager.getResource("resource/groupFightResource/pet/" + MainManager.actorModel.pet.info.petID + ".swf",function(param1:DisplayObject):void
                     {
                        _pet = param1 as MovieClip;
                        _pet.gotoAndStop("right");
                        var _loc2_:MLoadPane = new MLoadPane(_pet);
                        if(_pet.width > _pet.height)
                        {
                           _loc2_.fitType = MLoadPane.FIT_WIDTH;
                        }
                        else
                        {
                           _loc2_.fitType = MLoadPane.FIT_HEIGHT;
                        }
                        _loc2_.setSizeWH(40,40);
                        conLevel["swim_music"].play();
                        conLevel["pet_mc"]["container"].addChild(_pet);
                        _pet.x = 0;
                        _pet.y = 15;
                        conLevel["pet_mc"].visible = true;
                        conLevel["pet_mc"].addEventListener(Event.ENTER_FRAME,onSwimEnterFrame);
                     },"pet");
                  });
                  SocketConnection.send(CommandID.JOIN_GAME,3);
               }
               else
               {
                  NpcDialog.show(NPC.HAPPYVALLEYADMIN,["把0xff0000水系精灵0xffffff带在身边才能进行障碍游泳游戏哦！"],["知道了。"]);
               }
            }
            else
            {
               NpcDialog.show(NPC.HAPPYVALLEYADMIN,["把0xff0000水系精灵0xffffff带在身边才能进行障碍游泳游戏哦！"],["知道了。"]);
            }
         }
      }
      
      private function onWoodClick(param1:MouseEvent) : void
      {
         var wood:MovieClip = null;
         var e:MouseEvent = param1;
         if(!this._isClick)
         {
            this._isClick = true;
            wood = e.target as MovieClip;
            wood.gotoAndPlay(2);
            wood.addEventListener(Event.ENTER_FRAME,function():void
            {
               if(wood.currentFrame == 1)
               {
                  _isClick = false;
                  wood.removeEventListener(Event.ENTER_FRAME,arguments.callee);
               }
            });
         }
      }
      
      private function onSwimEnterFrame(param1:Event) : void
      {
         if(this._gameType != 3)
         {
            return;
         }
         if(conLevel["wood_1"].hitTestPoint(conLevel["pet_mc"].x,conLevel["pet_mc"].y))
         {
            if(conLevel["wood_1"].currentFrame == 1)
            {
               if(!this._isSwimStop)
               {
                  this._isSwimStop = true;
                  ++this._swimHitCount;
               }
               return;
            }
         }
         if(conLevel["wood_2"].hitTestPoint(conLevel["pet_mc"].x,conLevel["pet_mc"].y))
         {
            if(conLevel["wood_2"].currentFrame == 1)
            {
               if(!this._isSwimStop)
               {
                  this._isSwimStop = true;
                  ++this._swimHitCount;
               }
               return;
            }
         }
         if(conLevel["wood_3"].hitTestPoint(conLevel["pet_mc"].x,conLevel["pet_mc"].y))
         {
            if(conLevel["wood_3"].currentFrame == 1)
            {
               if(!this._isSwimStop)
               {
                  this._isSwimStop = true;
                  ++this._swimHitCount;
               }
               return;
            }
         }
         this._isSwimStop = false;
         if(!this._isSwimBack)
         {
            ++conLevel["pet_mc"].x;
            if(conLevel["pet_mc"].x >= 770)
            {
               this._isSwimBack = true;
               conLevel["pet_mc"].scaleX = -1;
            }
         }
         else
         {
            --conLevel["pet_mc"].x;
            if(conLevel["pet_mc"].x <= 400)
            {
               this._isSwimBack = false;
               conLevel["pet_mc"].scaleX = 1;
               conLevel["pet_mc"].removeEventListener(Event.ENTER_FRAME,this.onSwimEnterFrame);
               if(this._swimHitCount == 0)
               {
                  this.swimGameComplete(10);
               }
               else if(this._swimHitCount < 2)
               {
                  this.swimGameComplete(8);
               }
               else
               {
                  this.swimGameComplete(5);
               }
            }
         }
      }
      
      private function swimGameComplete(param1:int) : void
      {
         this._gameType = 0;
         this._swimHitCount = 0;
         conLevel["pet_mc"].visible = false;
         conLevel["pet_mc"].removeEventListener(Event.ENTER_FRAME,this.onSwimEnterFrame);
         conLevel["swim_music"].gotoAndStop(1);
         MainManager.actorModel.pet.visible = true;
         SocketConnection.send(CommandID.GAME_OVER,100,param1);
      }
      
      override public function destroy() : void
      {
         var _loc1_:int = 0;
         conLevel["shop_btn"].removeEventListener(MouseEvent.CLICK,this.onShopClick);
         conLevel["intro_btn"].removeEventListener(MouseEvent.CLICK,this.onIntroClick);
         conLevel["wood_1"].removeEventListener(MouseEvent.CLICK,this.onWoodClick);
         conLevel["wood_2"].removeEventListener(MouseEvent.CLICK,this.onWoodClick);
         conLevel["wood_3"].removeEventListener(MouseEvent.CLICK,this.onWoodClick);
         this._timer.reset();
         this._timer.removeEventListener(TimerEvent.TIMER,this.onTimer);
         this._stopTimer.reset();
         this._stopTimer.removeEventListener(TimerEvent.TIMER,this.onStopTimer);
         conLevel["car_mc"].removeEventListener(Event.ENTER_FRAME,this.onCarEnterFrame);
         conLevel["pet_mc"].removeEventListener(Event.ENTER_FRAME,this.onSwimEnterFrame);
         if(this._stone)
         {
            while(_loc1_ < 4)
            {
               if(this._stone[_loc1_])
               {
                  this._stone[_loc1_].removeEventListener(MouseEvent.CLICK,this.onStoneClick);
               }
               _loc1_++;
            }
         }
         if(this._shop)
         {
            this._shop.sharedEvents.removeEventListener("BUY_PET_1118",this.onBuyPet);
         }
      }
   }
}
