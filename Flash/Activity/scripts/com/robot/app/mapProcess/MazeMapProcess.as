package com.robot.app.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.mapProcess.control.ColorfulPrivilegeWishController;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.SpecAlert;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import flash.utils.Endian;
   import flash.utils.setTimeout;
   import gs.TweenMax;
   import org.taomee.effect.ColorFilter;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MazeMapProcess extends BaseMapProcess
   {
       
      
      protected var step:int = 0;
      
      protected var hasWrongDoor:int = 0;
      
      protected var stoneIndex:int = 0;
      
      protected var selectDoor:int = 0;
      
      protected var mask:Sprite;
      
      protected var path:Array;
      
      protected var rightPath:int = 0;
      
      protected var answer:int = 0;
      
      protected var boss:Array;
      
      protected var tempStep:int = 0;
      
      protected var modifyPath:Array;
      
      private var currDoor:MovieClip;
      
      public function MazeMapProcess()
      {
         this.path = [[1,3,4,2],[1,2,2,2],[4,2,3,1],[3,1,2,4]];
         this.boss = [55,1405,1031,1134,546,921,668,856,1742,848,1097,1492,465,1325,2017,1358,624,2122,1616,1798];
         this.modifyPath = [];
         super();
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
      }
      
      override protected function init() : void
      {
         this.mask = conLevel["mask"];
         this.mask.visible = false;
         DisplayUtil.removeAllChild(btnLevel["petContainer"]);
         var _loc1_:int = 0;
         while(_loc1_ < 3)
         {
            MovieClip(conLevel["mcMaze"]["mcDoor_" + _loc1_]).gotoAndStop(1);
            _loc1_++;
         }
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.hide();
         conLevel["mcMaze"]["mcEnter"].visible = false;
         this.addEvent();
         this.getData();
         MovieClip(btnLevel["mcNotice"]).gotoAndPlay(MovieClip(btnLevel["mcNotice"]).totalFrames);
         this.checkVipState();
      }
      
      private function getData() : void
      {
         KTool.getMultiValue([5129,5130],function(param1:Array):void
         {
            var _loc2_:int = int(param1[0]);
            rightPath = param1[1];
            var _loc3_:ByteArray = new ByteArray();
            _loc3_.endian = Endian.LITTLE_ENDIAN;
            _loc3_.writeUnsignedInt(_loc2_);
            _loc3_.position = 0;
            answer = _loc3_.readByte();
            step = _loc3_.readByte();
            hasWrongDoor = _loc3_.readByte();
            stoneIndex = _loc3_.readByte();
            var _loc4_:Array = ["大地之神天神迷宫","大地之神地祇迷宫","大地之神天岳迷宫","大地之神永恒迷宫","大地之神神之迷宫"];
            MapNamePanel.nameText = "" + _loc4_[stoneIndex - 1];
            var _loc5_:int = 0;
            if(path[answer - 1][step] == 4)
            {
               modifyPath = [2,3,4];
            }
            else
            {
               modifyPath = [1,2,3];
            }
            if(rightPath > 0)
            {
               SimpleButton(btnLevel["btnCheats"]).filters = [ColorFilter.setGrayscale()];
               SimpleButton(btnLevel["btnCheats"]).mouseEnabled = false;
            }
            if(step > 0)
            {
               MovieClip(btnLevel["mcStep"]["mc"]).gotoAndStop(step);
               SimpleButton(btnLevel["btnCheats"]).filters = [ColorFilter.setGrayscale()];
               SimpleButton(btnLevel["btnCheats"]).mouseEnabled = false;
               btnLevel["mcStep"].visible = true;
               if(tempStep > 0)
               {
                  setDoorEnable(false);
                  loadBoss(boss[(tempStep - 1) * 4 + selectDoor - 1]);
                  MovieClip(btnLevel["mcStep"]["mc"]).gotoAndStop(step + 1);
                  if(step == 4)
                  {
                     btnLevel["mcStep"].visible = false;
                  }
               }
               else
               {
                  tempStep = step;
                  showDoor();
               }
            }
            else
            {
               if(tempStep > 0)
               {
                  btnLevel["mcStep"].visible = true;
                  MovieClip(btnLevel["mcStep"]["mc"]).gotoAndStop(1);
                  setDoorEnable(false);
                  loadBoss(boss[(tempStep - 1) * 4 + selectDoor]);
               }
               else
               {
                  btnLevel["mcStep"].visible = false;
                  showDoor();
               }
               tempStep = 0;
            }
         });
      }
      
      private function getCurrDoor() : MovieClip
      {
         var _loc1_:int = int(this.path[this.rightPath - 1][this.step]);
         var _loc2_:int = 0;
         while(_loc2_ < 3)
         {
            if(this.modifyPath[_loc2_] == _loc1_)
            {
               return MovieClip(conLevel["mcMaze"]["mcDoor_" + _loc2_]);
            }
            _loc2_++;
         }
         return null;
      }
      
      private function showDoor() : void
      {
         this.setDoorEnable(true);
         var _loc1_:int = 0;
         if(this.step < 4)
         {
            if(MainManager.actorInfo.isVip)
            {
               MovieClip(conLevel["mcMaze"]["mcDoor_1"]).gotoAndStop(2);
               MovieClip(conLevel["mcMaze"]["mcDoor_1"]).mouseChildren = false;
               MovieClip(conLevel["mcMaze"]["mcDoor_1"]).mouseEnabled = false;
               if(this.path[this.answer - 1][this.step] == 4)
               {
                  this.modifyPath = [2,3,4];
               }
               else
               {
                  this.modifyPath = [1,2,3];
                  if(this.path[this.answer - 1][this.step] == 2)
                  {
                     this.modifyPath = [1,3,2];
                  }
               }
            }
            if(this.rightPath > 0)
            {
               _loc1_ = 0;
               while(_loc1_ < 3)
               {
                  MovieClip(conLevel["mcMaze"]["mcDoor_" + _loc1_]).mouseChildren = false;
                  MovieClip(conLevel["mcMaze"]["mcDoor_" + _loc1_]).mouseEnabled = false;
                  MovieClip(conLevel["mcMaze"]["mcDoor_" + _loc1_]).gotoAndStop(2);
                  _loc1_++;
               }
               this.getCurrDoor().gotoAndStop(1);
               this.getCurrDoor().mouseEnabled = true;
               this.getCurrDoor().mouseChildren = true;
            }
         }
         else
         {
            conLevel["mcMaze"]["mcEnter"].visible = true;
            MovieClip(conLevel["mcMaze"]["mcDoor_0"]).visible = false;
            MovieClip(conLevel["mcMaze"]["mcDoor_1"]).visible = false;
            MovieClip(conLevel["mcMaze"]["mcDoor_2"]).visible = false;
         }
         MovieClip(btnLevel["mcNotice"]).gotoAndPlay(2);
      }
      
      private function checkVipState() : void
      {
         if(MainManager.actorInfo.isVip)
         {
            btnLevel["btnVip"].visible = false;
         }
      }
      
      private function setDoorEnable(param1:Boolean) : void
      {
         var _loc2_:int = 0;
         while(_loc2_ < 3)
         {
            MovieClip(conLevel["mcMaze"]["mcDoor_" + _loc2_]).filters = null;
            MovieClip(conLevel["mcMaze"]["mcDoor_" + _loc2_]).mouseEnabled = param1;
            MovieClip(conLevel["mcMaze"]["mcDoor_" + _loc2_]).mouseChildren = param1;
            MovieClip(conLevel["mcMaze"]["mcDoor_" + _loc2_]).buttonMode = param1;
            MovieClip(conLevel["mcMaze"]["mcDoor_" + _loc2_]).gotoAndStop(1);
            _loc2_++;
         }
      }
      
      private function addEvent() : void
      {
         SimpleButton(btnLevel["btnClose"]).addEventListener(MouseEvent.CLICK,this.onExit);
         SimpleButton(btnLevel["btnExit"]).addEventListener(MouseEvent.CLICK,this.onExit);
         SimpleButton(btnLevel["btnCure"]).addEventListener(MouseEvent.CLICK,this.onCure);
         SimpleButton(btnLevel["btnExp"]).addEventListener(MouseEvent.CLICK,this.onExp);
         SimpleButton(btnLevel["btnBag"]).addEventListener(MouseEvent.CLICK,this.onBag);
         SimpleButton(btnLevel["btnCheats"]).addEventListener(MouseEvent.CLICK,this.onCheats);
         conLevel["mcMaze"]["mcEnter"].addEventListener(MouseEvent.CLICK,this.onClickDoor);
         var _loc1_:int = 0;
         while(_loc1_ < 3)
         {
            MovieClip(conLevel["mcMaze"]["mcDoor_" + _loc1_]).addEventListener(MouseEvent.CLICK,this.onClickDoor);
            _loc1_++;
         }
         MovieClip(btnLevel["petContainer"]).buttonMode = true;
         MovieClip(conLevel["mcMaze"]["mcEnter"]).buttonMode = true;
         MovieClip(btnLevel["petContainer"]).addEventListener(MouseEvent.CLICK,this.onClickBoss);
      }
      
      private function onClickVip(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4,"2",function():void
         {
            checkVipState();
            showDoor();
         });
      }
      
      protected function onClickBoss(param1:MouseEvent) : void
      {
         var bossid:int;
         var onFight:Function = null;
         var event:MouseEvent = param1;
         onFight = function(param1:*):void
         {
            var e:* = param1;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
            KTool.getMultiValue([5129,5130],function(param1:Array):void
            {
               var ba:ByteArray;
               var values:Array = param1;
               var info:int = int(values[0]);
               rightPath = values[1];
               ba = new ByteArray();
               ba.endian = Endian.LITTLE_ENDIAN;
               ba.writeUnsignedInt(info);
               ba.position = 0;
               answer = ba.readByte();
               step = ba.readByte();
               hasWrongDoor = ba.readByte();
               stoneIndex = ba.readByte();
               if(step >= 4 && hasWrongDoor > 0)
               {
                  Alarm2.show("小赛尔，请不要灰心哦，再多试几次吧。累积到" + TextFormatUtil.getRedTxt("第8次") + "探索迷宫就一定会找到正确的路线哦！",function():void
                  {
                     onExit();
                  });
               }
               if(step == 5)
               {
                  onExit();
                  return;
               }
               setTimeout(playNotice,3000);
            });
         };
         var startBoss:int = 1620;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFight);
         bossid = 1620 + this.step * 4 + this.selectDoor - 1;
         FightManager.fightNoMapBoss("",bossid);
      }
      
      private function playNotice() : void
      {
         if(MapManager.currentMap.btnLevel["mcNotice"])
         {
            MovieClip(MapManager.currentMap.btnLevel["mcNotice"]).gotoAndPlay(2);
         }
      }
      
      private function loadBoss(param1:uint) : void
      {
         this.setDoorEnable(false);
         var _loc2_:String = String(ClientConfig.getPetSwfPath(param1));
         ResourceManager.getResource(_loc2_,this.loadComHandler,"pet");
         var _loc3_:int = 0;
         while(_loc3_ < 3)
         {
            MovieClip(conLevel["mcMaze"]["mcDoor_" + _loc3_]).gotoAndStop(2);
            _loc3_++;
         }
      }
      
      private function loadComHandler(param1:DisplayObject) : void
      {
         var mc:MovieClip = null;
         var dis:DisplayObject = param1;
         DisplayUtil.removeAllChild(btnLevel["petContainer"]);
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
            mc.scaleX = mc.scaleY = 1.5;
            MovieClip(btnLevel["petContainer"]).addChild(mc);
         }
      }
      
      protected function onClickDoor(param1:MouseEvent) : void
      {
         var mc:MovieClip = null;
         var event:MouseEvent = param1;
         var zoom:Function = function():void
         {
            mask.visible = true;
            btnLevel.visible = false;
            depthLevel.visible = false;
            conLevel["mcMaze"].mask = mask;
            ++tempStep;
            TweenMax.to(mask,1,{
               "scaleX":0,
               "scaleY":0,
               "onComplete":function():void
               {
                  var i:* = undefined;
                  if(step == 4)
                  {
                     i = 0;
                     while(i < 3)
                     {
                        MovieClip(conLevel["mcMaze"]["mcDoor_" + i]).visible = false;
                        MovieClip(conLevel["mcMaze"]["mcDoor_" + i]).visible = false;
                        i++;
                     }
                  }
                  TweenMax.to(mask,1,{
                     "scaleX":1,
                     "scaleY":1,
                     "onComplete":function():void
                     {
                        btnLevel.visible = true;
                        depthLevel.visible = true;
                        getData();
                        mc.gotoAndStop(1);
                     }
                  });
               }
            });
         };
         mc = event.currentTarget as MovieClip;
         var index:int = int(String(event.currentTarget.name).split("_")[1]);
         if(this.step < 4)
         {
            this.selectDoor = this.modifyPath[index];
            zoom();
         }
         else
         {
            this.selectDoor = this.stoneIndex;
            zoom();
         }
      }
      
      private function removeEvent() : void
      {
         SimpleButton(btnLevel["btnClose"]).removeEventListener(MouseEvent.CLICK,this.onExit);
         SimpleButton(btnLevel["btnExit"]).removeEventListener(MouseEvent.CLICK,this.onExit);
         SimpleButton(btnLevel["btnCure"]).removeEventListener(MouseEvent.CLICK,this.onCure);
         SimpleButton(btnLevel["btnExp"]).removeEventListener(MouseEvent.CLICK,this.onExp);
         SimpleButton(btnLevel["btnBag"]).removeEventListener(MouseEvent.CLICK,this.onBag);
         SimpleButton(btnLevel["btnCheats"]).removeEventListener(MouseEvent.CLICK,this.onCheats);
         conLevel["mcMaze"]["mcEnter"].removeEventListener(MouseEvent.CLICK,this.onClickDoor);
         var _loc1_:int = 0;
         while(_loc1_ < 3)
         {
            MovieClip(conLevel["mcMaze"]["mcDoor_" + _loc1_]).removeEventListener(MouseEvent.CLICK,this.onClickDoor);
            _loc1_++;
         }
      }
      
      protected function onCheats(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         KTool.buyProductByCallback(240674,1,function():void
         {
            KTool.doExchange(2830,function():void
            {
               tempStep = 0;
               getData();
               SimpleButton(btnLevel["btnCheats"]).filters = [ColorFilter.setGrayscale()];
               SimpleButton(btnLevel["btnCheats"]).mouseEnabled = false;
            });
         });
      }
      
      protected function onBag(param1:MouseEvent) : void
      {
         PetBagControllerNew.showByBuffer();
      }
      
      protected function onExp(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("ExshiwExpPanel"));
      }
      
      protected function onCure(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         if(MainManager.actorInfo.superNono)
         {
            PetManager.cureAll();
         }
         else if(ColorfulPrivilegeWishController.bonusType == 1)
         {
            PetManager.cureAll();
         }
         else
         {
            SpecAlert.show("恢复精灵体力需要花费50赛尔豆，成为超No用户即可享受永久免费恢复特权！",function():void
            {
               PetManager.cureAll();
            });
         }
      }
      
      protected function onExit(param1:MouseEvent = null) : void
      {
         MapManager.changeLocalMap(10539);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,this.onMapSwitchComplete);
      }
      
      private function onMapSwitchComplete(param1:MapEvent) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,this.onMapSwitchComplete);
         ModuleManager.showModule(ClientConfig.getAppModule("KaxiusiEvoSummaryPanel"));
      }
      
      override public function destroy() : void
      {
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.show();
         this.removeEvent();
      }
   }
}
