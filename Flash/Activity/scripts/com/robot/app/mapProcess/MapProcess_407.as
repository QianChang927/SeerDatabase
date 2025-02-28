package com.robot.app.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petUpdate.PetUpdatePropController;
   import com.robot.app.task.taskscollection.Task1227;
   import com.robot.app.task.taskscollection.Task142;
   import com.robot.app.task.taskscollection.Task735;
   import com.robot.core.CommandID;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.filters.ColorMatrixFilter;
   import flash.utils.ByteArray;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_407 extends BaseMapProcess
   {
      
      public static var getExp:Boolean;
      
      public static var hasCatchPet:Boolean;
      
      public static var hasFightOver:Boolean;
       
      
      private var _filter:ColorMatrixFilter;
      
      private var _bubblingMC:MovieClip;
      
      private var _redBall:MovieClip;
      
      private var _yellowBall:MovieClip;
      
      private var _blueBall:MovieClip;
      
      private var _rattanMC:MovieClip;
      
      private var _rattanBtn1:SimpleButton;
      
      private var _rattanBtn2:SimpleButton;
      
      private var _stoneMC:MovieClip;
      
      private var _stoneSuccessMC:MovieClip;
      
      private var _stoneBtn1:SimpleButton;
      
      private var _amberMC:MovieClip;
      
      private var _effectMC:MovieClip;
      
      private var _catchSuccessMC:MovieClip;
      
      private var _greenArray:Array;
      
      private var _redArray:Array;
      
      private var _yellowArray:Array;
      
      private var _blueArray:Array;
      
      private var _canInteractLeaves:Boolean;
      
      private var _petName:String;
      
      private var _stoneStatus:uint = 0;
      
      private var _shotTime:uint = 0;
      
      public function MapProcess_407()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.initResource();
         this.initAnimator();
         this.addEvents();
         this.initAfterFight();
         Task735.initTaskForMap407(this);
         Task1227.initForMap407(this);
      }
      
      private function initResource() : void
      {
         this._filter = new ColorMatrixFilter([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0]);
         this._bubblingMC = conLevel["bubblingMC"];
         this._rattanMC = conLevel["rattanMC"];
         this._rattanBtn1 = this._rattanMC["clickBtn_1"];
         this._rattanBtn2 = this._rattanMC["clickBtn_2"];
         this._stoneMC = conLevel["stoneMC"];
         this._stoneBtn1 = this._stoneMC["clickBtn"];
         this._amberMC = conLevel["amberMC"];
         this._effectMC = topLevel["effectMC"];
         this._catchSuccessMC = topLevel["catchSuccessMC"];
         this._greenArray = new Array();
         this._greenArray.push(MapManager.currentMap.backLevel);
         this._greenArray.push(conLevel["door_1"]);
         this._greenArray.push(this._rattanMC);
         this._greenArray.push(conLevel["green_1"]);
         this._greenArray.push(this._stoneMC);
         this._greenArray.push(conLevel["green_2"]);
         this._redArray = new Array();
         this._redArray.push(conLevel["red_1"]);
         this._yellowArray = new Array();
         this._yellowArray.push(this._amberMC);
         this._yellowArray.push(conLevel["yellow_1"]);
         this._yellowArray.push(conLevel["yellow_2"]);
         this._blueArray = new Array();
         this._blueArray.push(conLevel["blue_1"]);
      }
      
      public function initFilters() : void
      {
         this.addFilter(this._greenArray);
         this.addFilter(this._redArray);
         this.addFilter(this._yellowArray);
         this.addFilter(this._blueArray);
      }
      
      public function destroyFilters() : void
      {
         this.delFilter(this._greenArray);
         this.delFilter(this._redArray);
         this.delFilter(this._yellowArray);
         this.delFilter(this._blueArray);
      }
      
      private function delFilter(param1:Array) : void
      {
         var _loc2_:DisplayObject = null;
         var _loc3_:uint = 0;
         while(_loc3_ < param1.length)
         {
            _loc2_ = param1[_loc3_] as DisplayObject;
            if(_loc2_)
            {
               _loc2_.filters = null;
            }
            _loc3_++;
         }
      }
      
      private function initAnimator() : void
      {
         this._rattanMC.gotoAndStop(1);
         this._amberMC.gotoAndStop(1);
         this._stoneMC.gotoAndStop(1);
         this._effectMC.gotoAndStop(1);
         this._catchSuccessMC.gotoAndStop(1);
         this._effectMC.visible = false;
      }
      
      private function initAfterFight() : void
      {
         if(hasCatchPet)
         {
            NpcDialog.show(NPC.SUPERNONO,["\t白色代表纯洁！开启白色的封印你将会是我永远的朋友……"],["我会好好照顾你的！"],[function():void
            {
               Task142.getMc(_stoneMC,6,"mc_6",function(param1:MovieClip):void
               {
                  var mc:MovieClip = param1;
                  Task142.playMC(mc,function():void
                  {
                     Task142.getMc(_stoneMC,7,"mc_7",function(param1:MovieClip):void
                     {
                        param1.gotoAndStop(param1.totalFrames);
                        _stoneStatus = 2;
                     });
                  });
               });
            }]);
         }
         else if(hasFightOver)
         {
            NpcDialog.show(NPC.SUPERNONO,["\t只有心存善念你才能开启封印之石！当白色与黑色相结合时，会有意想不到的事情发生！"],["我再来试试看！"],[function():void
            {
               Task142.getMc(_stoneMC,7,"mc_7",function(param1:MovieClip):void
               {
                  var mc:MovieClip = param1;
                  Task142.playMC(mc,function():void
                  {
                     _stoneMC.gotoAndStop(1);
                     _stoneStatus = 0;
                  });
               });
            }]);
         }
      }
      
      private function addEvents() : void
      {
         ToolTipManager.add(this._bubblingMC,"咕噜咕噜花");
         ToolTipManager.add(this._rattanMC,"绿野仙踪");
         ToolTipManager.add(this._amberMC,"琥珀源");
         ToolTipManager.add(this._stoneMC,"封印之石");
         if(MainManager.actorInfo.dailyResArr[60] > 0)
         {
            this._canInteractLeaves = true;
            this._rattanBtn1.addEventListener(MouseEvent.CLICK,this.onRattanClick1);
            this.removeFilter([this._rattanMC]);
         }
         else
         {
            this._rattanBtn1.addEventListener(MouseEvent.MOUSE_OVER,this.onRattanOver);
            this._rattanBtn1.addEventListener(MouseEvent.MOUSE_OUT,this.onRattanOut);
            this._rattanBtn1.addEventListener(MouseEvent.CLICK,this.onRattanClick1);
            this._rattanBtn2.addEventListener(MouseEvent.CLICK,this.onRattanClick2);
            this._rattanBtn2.mouseEnabled = false;
         }
         this._stoneBtn1.addEventListener(MouseEvent.CLICK,this.onStoneClick);
         this._stoneBtn1.addEventListener(MouseEvent.MOUSE_OVER,this.onStoneOver);
         this._stoneBtn1.addEventListener(MouseEvent.MOUSE_OUT,this.onStoneOut);
         this._amberMC.buttonMode = true;
         this._amberMC.addEventListener(MouseEvent.CLICK,this.onAmberClick);
         if(MainManager.actorInfo.dailyResArr[61] == 10)
         {
            this._bubblingMC.gotoAndStop(2);
            this._bubblingMC.buttonMode = true;
            this._bubblingMC.addEventListener(MouseEvent.CLICK,this.onBubblingMC);
         }
         else
         {
            Task142.getMc(this._bubblingMC,1,"",function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               mc.addEventListener(Event.ENTER_FRAME,function():void
               {
                  var _loc2_:MovieClip = null;
                  if(mc.totalFrames == mc.currentFrame)
                  {
                     mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                     _loc2_ = mc.getChildByName("bubbleContainer") as MovieClip;
                     _redBall = _loc2_.getChildByName("redBall") as MovieClip;
                     _yellowBall = _loc2_.getChildByName("yellowBall") as MovieClip;
                     _blueBall = _loc2_.getChildByName("blueBall") as MovieClip;
                     _redBall.buttonMode = true;
                     _redBall.addEventListener(MouseEvent.CLICK,onBallClick);
                     _yellowBall.buttonMode = true;
                     _yellowBall.addEventListener(MouseEvent.CLICK,onBallClick);
                     _blueBall.buttonMode = true;
                     _blueBall.addEventListener(MouseEvent.CLICK,onBallClick);
                  }
               });
            });
         }
         EventManager.addEventListener("Error103542",this.onError103542);
      }
      
      private function onError103542(param1:RobotEvent) : void
      {
         if(MainManager.actorInfo.superNono)
         {
            NpcDialog.show(NPC.SUPERNONO,["我相信在我们不间断的努力下！我们都会变得更强哟！"],["嗯，我知道啦~"]);
         }
         else
         {
            NpcDialog.show(NPC.NONO,["我相信在我们不间断的努力下！我们都会变得更强哟！"],["嗯，我知道啦~"]);
         }
      }
      
      private function onBubblingMC(param1:MouseEvent) : void
      {
         if(MainManager.actorInfo.superNono)
         {
            NpcDialog.show(NPC.SUPERNONO,["\t我爱好多泡泡，啦啦啦！哎呀！泡泡会不会没有内？我们不能再点了嘛！"],["那我们去看看其他地方！"]);
         }
         else
         {
            NpcDialog.show(NPC.NONO,["\t一个、两个、三个！好多小泡泡哦！主人我们点下去泡泡会不会没有呢？明天再来嘛！"],["我们去看看其他地方"]);
         }
      }
      
      private function onAmberClick(param1:MouseEvent) : void
      {
         var hasGrass:Boolean = false;
         var petInfo:PetInfo = null;
         var petID:uint = 0;
         var event:MouseEvent = param1;
         hasGrass = false;
         if(PetManager.showInfo)
         {
            petInfo = PetManager.showInfo;
            petID = uint(petInfo.id);
            this._petName = PetXMLInfo.getName(petID);
            if(PetXMLInfo.getType(petID) == "1")
            {
               hasGrass = true;
            }
         }
         if(MainManager.actorInfo.superNono)
         {
            Task142.getMc(this._amberMC,2,"",function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               Task142.playMC(mc,function():void
               {
                  if(hasGrass)
                  {
                     SocketConnection.addCmdListener(CommandID.NOTE_UPDATE_PROP,onUpdateProp);
                     SocketConnection.addCmdListener(CommandID.NONO_FORESTPARTY_2,onNonoForestParty2);
                     SocketConnection.send(CommandID.NONO_FORESTPARTY_2);
                     getExp = true;
                  }
                  else
                  {
                     NpcDialog.show(NPC.SUPERNONO,["\t主人你的草系精灵呢？快把它带在身边吧！没它的帮忙我们可没办法启动琥珀源的威力！"],["知道了...."]);
                  }
                  _amberMC.gotoAndStop(1);
               });
            });
         }
         else
         {
            Task142.getMc(this._amberMC,3,"",function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               Task142.playMC(mc,function():void
               {
                  if(hasGrass)
                  {
                     SocketConnection.addCmdListener(CommandID.NOTE_UPDATE_PROP,onUpdateProp);
                     SocketConnection.addCmdListener(CommandID.NONO_FORESTPARTY_2,onNonoForestParty2);
                     SocketConnection.send(CommandID.NONO_FORESTPARTY_2);
                     getExp = true;
                  }
                  else
                  {
                     NpcDialog.show(NPC.NONO,["\t哎呀不对！琥珀源似乎只有在草系精灵的帮助下才能施展威力！"],["我这就带上我的草系精灵一起来作战！"]);
                  }
                  _amberMC.gotoAndStop(1);
               });
            });
         }
      }
      
      private function onUpdateProp(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.NOTE_UPDATE_PROP,this.onUpdateProp);
         PetUpdatePropController.owner.show(true);
      }
      
      private function onNonoForestParty2(param1:SocketEvent) : void
      {
         var _loc3_:* = null;
         SocketConnection.removeCmdListener(CommandID.NONO_FORESTPARTY_2,this.onNonoForestParty2);
         var _loc2_:uint = ByteArray(param1.data).readUnsignedInt();
         if(_loc2_ == 3000)
         {
            _loc3_ = "嘿咻！嘿咻！不错啊！" + this._petName + "经过了这场战斗，增长了0xff000030000xffffff点经验。";
         }
         else if(_loc2_ >= 2001 && _loc2_ <= 2999)
         {
            _loc3_ = "#8哇塞！！！ 你真了不起呐，通过你的努力，你的" + this._petName + "增长了0xff0000" + _loc2_ + "0xffffff点经验。";
         }
         else if(_loc2_ >= 1001 && _loc2_ <= 2000)
         {
            _loc3_ = "嘿！这场战斗带来的收获可不小啊！快看你的" + this._petName + "已经获得了0xff0000" + _loc2_ + "0xffffff点经验。";
         }
         else if(_loc2_ <= 1000 && _loc2_ > 0)
         {
            _loc3_ = "嘿！这场战斗带来的收获可不小啊！快看你的" + this._petName + "已经获得了0xff0000" + _loc2_ + "0xffffff点经验。";
         }
         else
         {
            _loc3_ = " 咦，这次似乎没有任何收获哦！再来试试看吧！";
         }
         if(_loc2_ > 0)
         {
            NpcDialog.show(NPC.NONO,[_loc3_],["啊哈~~真不错呢！"]);
         }
         else
         {
            NpcDialog.show(NPC.NONO,[_loc3_],["再来试试看吧！"]);
         }
      }
      
      private function onBallClick(param1:MouseEvent) : void
      {
         var name:String = null;
         var event:MouseEvent = param1;
         name = String(event.currentTarget.name);
         var ball:MovieClip = event.currentTarget as MovieClip;
         var target:MovieClip = MovieClip(ball.getChildAt(0)).getChildByName("ball") as MovieClip;
         Task142.getMc(target,2,"",function(param1:MovieClip):void
         {
            switch(name)
            {
               case "redBall":
                  removeFilter(_redArray);
                  break;
               case "yellowBall":
                  removeFilter(_yellowArray);
                  break;
               case "blueBall":
                  removeFilter(_blueArray);
            }
            _bubblingMC.gotoAndStop(2);
            if(MainManager.actorInfo.dailyResArr[61] < 10)
            {
               SocketConnection.addCmdListener(CommandID.NONO_FORESTPARTY_1,onNonoForestParty1_2);
               SocketConnection.send(CommandID.NONO_FORESTPARTY_1,2);
            }
            else if(MainManager.actorInfo.superNono)
            {
               NpcDialog.show(NPC.SUPERNONO,["我爱好多泡泡，啦啦啦！哎呀！泡泡会不会没有内？我们不能再点了嘛！"],["那我们去看看其他地方！"]);
            }
            else
            {
               NpcDialog.show(NPC.NONO,["\t一个、两个、三个！好多小泡泡哦！主人我们点下去泡泡会不会没有呢？明天再来嘛！"],["我们去看看其他地方"]);
            }
         });
      }
      
      private function onNonoForestParty1_2(param1:SocketEvent) : void
      {
         var data:ByteArray;
         var count:uint;
         var name:String = null;
         var num:uint = 0;
         var event:SocketEvent = param1;
         SocketConnection.removeCmdListener(CommandID.NONO_FORESTPARTY_1,this.onNonoForestParty1_2);
         data = event.data as ByteArray;
         data.readUnsignedInt();
         data.readUnsignedInt();
         data.readUnsignedInt();
         count = data.readUnsignedInt();
         if(count > 0)
         {
            name = String(ItemXMLInfo.getName(data.readUnsignedInt()));
            num = data.readUnsignedInt();
            if(num == 2)
            {
               NpcDialog.show(NPC.SUPERNONO,["啊哈！我是超能NoNo！我最棒咯！！报告，我发现了0xff00002个豆豆果实0xffffff啊！"],["哈哈！好棒啊！"]);
            }
            else
            {
               NpcDialog.show(NPC.NONO,["\t报告主人！我刚刚发现了0xff00001个豆豆果实0xffffff哟！哈哈！我是不是很棒呢！"],["走！我们再找找！"]);
            }
         }
         if(MainManager.actorInfo.dailyResArr[61] < 10)
         {
            ++MainManager.actorInfo.dailyResArr[61];
            if(this._redBall)
            {
               this._redBall.removeEventListener(MouseEvent.CLICK,this.onBallClick);
            }
            if(this._yellowBall)
            {
               this._yellowBall.removeEventListener(MouseEvent.CLICK,this.onBallClick);
            }
            if(this._blueBall)
            {
               this._blueBall.removeEventListener(MouseEvent.CLICK,this.onBallClick);
            }
            Task142.getMc(this._bubblingMC,1,"",function(param1:MovieClip):void
            {
               var mc:MovieClip = param1;
               mc.addEventListener(Event.ENTER_FRAME,function():void
               {
                  var _loc2_:MovieClip = null;
                  if(mc.totalFrames == mc.currentFrame)
                  {
                     mc.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                     _loc2_ = mc.getChildByName("bubbleContainer") as MovieClip;
                     _redBall = _loc2_.getChildByName("redBall") as MovieClip;
                     _yellowBall = _loc2_.getChildByName("yellowBall") as MovieClip;
                     _blueBall = _loc2_.getChildByName("blueBall") as MovieClip;
                     _redBall.buttonMode = true;
                     _redBall.addEventListener(MouseEvent.CLICK,onBallClick);
                     _yellowBall.buttonMode = true;
                     _yellowBall.addEventListener(MouseEvent.CLICK,onBallClick);
                     _blueBall.buttonMode = true;
                     _blueBall.addEventListener(MouseEvent.CLICK,onBallClick);
                  }
               });
            });
         }
         else
         {
            this._bubblingMC.buttonMode = true;
            this._bubblingMC.gotoAndStop(1);
            this._bubblingMC.addEventListener(MouseEvent.CLICK,this.onBubblingMC);
         }
      }
      
      private function onRattanOver(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         Task142.getMc(this._rattanMC,2,"mc_2",function(param1:MovieClip):void
         {
            param1.play();
         });
      }
      
      private function onRattanOut(param1:MouseEvent) : void
      {
         this._rattanMC.gotoAndStop(1);
      }
      
      private function onRattanClick1(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         if(this._canInteractLeaves)
         {
            if(MainManager.actorInfo.dailyResArr[60] == 6)
            {
               NpcDialog.show(NPC.SUPERNONO,["哎呀！再拽藤条可就要断咯！明天再来吧！"],["好哦！我知道啦！"]);
            }
            else
            {
               SocketConnection.addCmdListener(CommandID.NONO_FORESTPARTY_1,this.onNonoForestParty1_1);
               SocketConnection.send(CommandID.NONO_FORESTPARTY_1,1);
            }
         }
         else
         {
            event.stopImmediatePropagation();
            this._rattanBtn1.removeEventListener(MouseEvent.MOUSE_OVER,this.onRattanOver);
            this._rattanBtn1.removeEventListener(MouseEvent.MOUSE_OUT,this.onRattanOut);
            if(MainManager.actorInfo.superNono)
            {
               Task142.getMc(this._rattanMC,3,"mc_3",function(param1:MovieClip):void
               {
                  var mc:MovieClip = param1;
                  Task142.playMC(mc,function():void
                  {
                     _rattanBtn1.mouseEnabled = false;
                     _rattanBtn2.mouseEnabled = true;
                  });
               });
            }
            else
            {
               NpcDialog.show(NPC.SUPERNONO,["\t哎呀！我似乎拉不动啊！似乎只有借助超能NoNo的神奇力量才可行了！这里究竟藏着神秘秘密呢？"],["我这就去开通超能NoNo！","好吧！那我再去看看其他地方……"],[function():void
               {
                  MapManager.changeMap(107);
               }]);
            }
         }
      }
      
      private function onBlackWhiteForest_1(param1:DynamicEvent) : void
      {
         EventManager.removeEventListener("BlackWhiteForest_1",this.onBlackWhiteForest_1);
         var _loc2_:String = param1.paramObject as String;
         NpcDialog.show(NPC.SUPERNONO,["超能NoNo帅！超能NoNo有智慧！我就是那个最最超能的超能NoNo咯！哈哈！铛铛0xff00002块" + _loc2_ + "0xffffff到手咯！主人你快看看，我厉害不？"],["哇哦！没想到这里竟然藏有这个！"]);
      }
      
      private function onNonoForestParty1_1(param1:SocketEvent) : void
      {
         var _loc4_:String = null;
         var _loc5_:uint = 0;
         SocketConnection.removeCmdListener(CommandID.NONO_FORESTPARTY_1,this.onNonoForestParty1_1);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         var _loc3_:uint = _loc2_.readUnsignedInt();
         if(_loc3_ > 0)
         {
            _loc4_ = String(ItemXMLInfo.getName(_loc2_.readUnsignedInt()));
            _loc5_ = _loc2_.readUnsignedInt();
            NpcDialog.show(NPC.SUPERNONO,["超能NoNo帅！超能NoNo有智慧！我就是那个最最超能的超能NoNo咯！哈哈！铛铛0xff00002块" + _loc4_ + "0xffffff到手咯！主人你快看看，我厉害不？"],["哇哦！没想到这里竟然藏有这个！"]);
         }
         if(MainManager.actorInfo.dailyResArr[60] < 6)
         {
            ++MainManager.actorInfo.dailyResArr[60];
            if(MainManager.actorInfo.dailyResArr[60] == 6)
            {
               NpcDialog.show(NPC.SUPERNONO,["一天拉这么多次藤条，它一定很疼吧！主人我们让它休息休息吧！好不好？"],["好！我们明天再来！"]);
            }
            if(MainManager.actorInfo.dailyResArr[60] == 1)
            {
               NpcDialog.show(NPC.SUPERNONO,["咦？这根树藤怎么突然有了颜色？是不是可以拉拉看呢？"],["哇哦！好神奇啊！"]);
            }
         }
         else
         {
            NpcDialog.show(NPC.SUPERNONO,["哎呀！再拽藤条可就要断咯！明天再来吧！"],["好哦！我知道啦！"]);
         }
      }
      
      private function onRattanClick2(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         Task142.getMc(this._rattanMC,4,"mc_4",function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            Task142.playMC(mc,function():void
            {
               _effectMC.visible = true;
               Task142.playMC(_effectMC,function():void
               {
                  removeFilter([_rattanMC]);
                  _rattanBtn2.mouseEnabled = false;
                  _rattanBtn1.mouseEnabled = true;
                  _canInteractLeaves = true;
               });
            });
         });
      }
      
      private function onStoneClick(param1:MouseEvent) : void
      {
         var canCatch:Boolean = false;
         var date:Date = null;
         var region:uint = 0;
         var event:MouseEvent = param1;
         switch(this._stoneStatus)
         {
            case 0:
               event.stopPropagation();
               this._stoneBtn1.removeEventListener(MouseEvent.MOUSE_OVER,this.onStoneOver);
               this._stoneBtn1.removeEventListener(MouseEvent.MOUSE_OUT,this.onStoneOut);
               if(MainManager.actorInfo.superNono)
               {
                  NpcDialog.show(NPC.SEER,["\t不对！这块石头一定有蹊跷！快用头部射击打打看！"],["好的！我这就试试看！"],[function():void
                  {
                     _stoneBtn1.removeEventListener(MouseEvent.CLICK,onStoneClick);
                     AimatController.addEventListener(AimatEvent.PLAY_END,onAimatEnd);
                  }]);
               }
               else
               {
                  NpcDialog.show(NPC.SUPERNONO,["\t不行！不行！这块石头具有神奇的能力！这里面似乎藏着某种力量！只有借助超能力量才能击垮它！"],["我这就去开通超能NoNo！","好吧！那我再去看看其他地方……"],[function():void
                  {
                     MapManager.changeMap(107);
                  }]);
               }
               this._stoneMC.gotoAndStop(1);
               break;
            case 1:
               canCatch = Math.random() < 0.3 ? true : false;
               date = new Date();
               if(date.getMonth() == 8 && (date.getDate() >= 22 && date.getDate() <= 24))
               {
                  if(canCatch)
                  {
                     region = 2;
                  }
                  else
                  {
                     region = 3;
                  }
               }
               else if(canCatch)
               {
                  region = 0;
               }
               else
               {
                  region = 1;
               }
               if(canCatch)
               {
                  SocketConnection.addCmdListener(CommandID.CATCH_MONSTER,this.onCatchMonster);
                  SocketConnection.addCmdListener(CommandID.FIGHT_OVER,this.onFightOver);
                  FightManager.fightWithBoss("米奈",region);
               }
               else
               {
                  SocketConnection.addCmdListener(CommandID.FIGHT_OVER,this.onFightOver);
                  FightManager.fightWithBoss("米奈希尔",region);
               }
               break;
            case 2:
               this._catchSuccessMC.addEventListener(Event.ENTER_FRAME,function():void
               {
                  if(_catchSuccessMC.currentFrame == _catchSuccessMC.totalFrames)
                  {
                     _catchSuccessMC.removeEventListener(Event.ENTER_FRAME,arguments.callee);
                     _catchSuccessMC.gotoAndStop(1);
                  }
               });
               this._catchSuccessMC.gotoAndPlay(2);
         }
      }
      
      private function onCatchMonster(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.CATCH_MONSTER,this.onCatchMonster);
         hasCatchPet = true;
      }
      
      private function onFightOver(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.FIGHT_OVER,this.onFightOver);
         hasFightOver = true;
      }
      
      private function onAimatEnd(param1:AimatEvent) : void
      {
         var _loc2_:AimatInfo = param1.info;
         if(this._stoneMC.hitTestPoint(_loc2_.endPos.x,_loc2_.endPos.y))
         {
            if(this._shotTime <= 2)
            {
               ++this._shotTime;
               this._stoneMC.gotoAndStop(2 + this._shotTime);
            }
            if(this._shotTime == 3)
            {
               this._stoneStatus = 1;
               AimatController.removeEventListener(AimatEvent.PLAY_END,this.onAimatEnd);
               this._stoneBtn1.addEventListener(MouseEvent.CLICK,this.onStoneClick);
            }
         }
      }
      
      private function onStoneOver(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         Task142.getMc(this._stoneMC,2,"",function(param1:MovieClip):void
         {
            param1.play();
         });
      }
      
      private function onStoneOut(param1:MouseEvent) : void
      {
         this._stoneMC.gotoAndStop(1);
      }
      
      private function addFilter(param1:Array) : void
      {
         var _loc4_:DisplayObject = null;
         var _loc5_:Array = null;
         var _loc2_:uint = param1.length;
         var _loc3_:uint = 0;
         while(_loc3_ < _loc2_)
         {
            if(_loc4_ = param1[_loc3_] as DisplayObject)
            {
               (_loc5_ = _loc4_.filters).push(this._filter);
               _loc4_.filters = _loc5_;
            }
            _loc3_++;
         }
      }
      
      private function removeFilter(param1:Array) : void
      {
         var _loc4_:DisplayObject = null;
         var _loc5_:Array = null;
         var _loc2_:uint = param1.length;
         var _loc3_:uint = 0;
         while(_loc3_ < _loc2_)
         {
            if(_loc4_ = param1[_loc3_] as DisplayObject)
            {
               if((_loc5_ = _loc4_.filters).length >= 1)
               {
                  _loc5_.pop();
                  _loc4_.filters = _loc5_;
               }
            }
            _loc3_++;
         }
      }
      
      override public function destroy() : void
      {
         ToolTipManager.remove(this._amberMC);
         ToolTipManager.remove(this._bubblingMC);
         ToolTipManager.remove(this._stoneMC);
         ToolTipManager.remove(this._rattanMC);
         this._rattanBtn1.removeEventListener(MouseEvent.MOUSE_OVER,this.onRattanOver);
         this._rattanBtn1.removeEventListener(MouseEvent.MOUSE_OUT,this.onRattanOut);
         this._rattanBtn1.removeEventListener(MouseEvent.CLICK,this.onRattanClick1);
         this._rattanBtn2.removeEventListener(MouseEvent.CLICK,this.onRattanClick2);
         this._stoneBtn1.removeEventListener(MouseEvent.CLICK,this.onStoneClick);
         this._stoneBtn1.removeEventListener(MouseEvent.MOUSE_OVER,this.onStoneOver);
         this._stoneBtn1.removeEventListener(MouseEvent.MOUSE_OUT,this.onStoneOut);
         this._amberMC.removeEventListener(MouseEvent.CLICK,this.onAmberClick);
         SocketConnection.removeCmdListener(CommandID.NONO_FORESTPARTY_2,this.onNonoForestParty2);
         SocketConnection.removeCmdListener(CommandID.NONO_FORESTPARTY_1,this.onNonoForestParty1_1);
         SocketConnection.removeCmdListener(CommandID.NONO_FORESTPARTY_2,this.onNonoForestParty1_2);
         SocketConnection.removeCmdListener(CommandID.NOTE_UPDATE_PROP,this.onUpdateProp);
         EventManager.removeEventListener("Error103542",this.onError103542);
         this._rattanMC = null;
         this._amberMC = null;
         this._bubblingMC = null;
         this._effectMC = null;
         this._stoneMC = null;
         this._catchSuccessMC = null;
         Task735.destroy();
         Task1227.destroy();
      }
   }
}
