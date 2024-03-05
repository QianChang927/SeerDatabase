package com.robot.app2.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.fightLevel.FightPetBagController;
   import com.robot.app.task.petstory.util.EventListenerManager;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.SoundManager;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.NumberUtils;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.filters.BitmapFilterQuality;
   import flash.filters.BlurFilter;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class BlackTuolukeGame extends Sprite
   {
       
      
      private const ALL_BOSS_NUM:int = 9;
      
      private var _gameMv:MovieClip;
      
      private var _elm:EventListenerManager;
      
      private var _bossPositions:Array;
      
      private var _disappearMv:MovieClip;
      
      private const shadowtweenTime:int = 1500;
      
      private const tipTweenTime:int = 1800;
      
      private var _currentStage:int = 0;
      
      private var _currentBossIndex:int = -1;
      
      private var _isRealBoss:Boolean = false;
      
      private var _game:Sprite;
      
      public function BlackTuolukeGame(param1:MovieClip)
      {
         var gameMv:MovieClip = param1;
         super();
         this._gameMv = gameMv;
         addChild(this._gameMv);
         this._disappearMv = this._gameMv["disappearMv"];
         this._gameMv.removeChild(this._disappearMv);
         this._disappearMv.gotoAndStop(this._disappearMv.totalFrames);
         this._game = this;
         LevelManager.appLevel.addChild(this);
         this._elm = new EventListenerManager();
         this.hideAllTip();
         this.hideAllBoss();
         this._gameMv["boss0"].visible = true;
         this._currentStage = 0;
         this.init();
         this._gameMv.mouseChildren = this._gameMv.mouseEnabled = false;
         this.showStartTip(function():void
         {
            showBossShadowMv(function():void
            {
               _gameMv.mouseChildren = _gameMv.mouseEnabled = true;
            });
         });
         this.showActor();
      }
      
      private function init() : void
      {
         this._bossPositions = [];
         this.hideAllTip();
         var _loc1_:int = 0;
         while(_loc1_ < this.ALL_BOSS_NUM)
         {
            this.addBossClickEvent(_loc1_);
            _loc1_++;
         }
         BonusController.addIgnore(225);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.fightOverHandler);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_OPEN,this.onMapChange);
         this._elm.addEventListener(this._gameMv["leave_btn"],MouseEvent.CLICK,this.onLeveBtnCLick);
         ToolTipManager.add(this._gameMv["leave_btn"],"离开");
         this._elm.addEventListener(this._gameMv["bag"],MouseEvent.CLICK,this.onPetBagHandler);
         ToolTipManager.add(this._gameMv["bag"],"背包");
      }
      
      private function onMapChange(param1:MapEvent) : void
      {
         if(this._game.parent)
         {
            this._game.parent.removeChild(this._game);
         }
      }
      
      private function addBossClickEvent(param1:int) : void
      {
         var i:int = param1;
         var bossMv:MovieClip = this._gameMv["boss" + i];
         this._bossPositions.push(new Point(bossMv.x,bossMv.y));
         bossMv.buttonMode = true;
         ToolTipManager.add(bossMv,"暗黑托鲁克的分身");
         this._elm.addEventListener(bossMv,MouseEvent.CLICK,function(param1:MouseEvent):void
         {
            _currentBossIndex = i;
            fight();
         });
      }
      
      private function showBossShadowMv(param1:Function = null) : void
      {
         var i:int;
         var boss0:MovieClip = null;
         var tid:int = 0;
         var bossMv:MovieClip = null;
         var dock:DisplayObject = null;
         var fun:Function = param1;
         var bossNum:int = this.ALL_BOSS_NUM - this._currentStage;
         boss0 = this._gameMv["boss0"];
         boss0.gotoAndStop(1);
         boss0.visible = true;
         this._gameMv["dock0"].visible = true;
         i = 1;
         while(i < this.ALL_BOSS_NUM)
         {
            bossMv = this._gameMv["boss" + i];
            dock = this._gameMv["dock" + i];
            if(i < bossNum)
            {
               this.setBossPosition(i,false);
               dock.visible = true;
            }
            else
            {
               DisplayUtil.removeForParent(bossMv);
               DisplayUtil.removeForParent(dock);
            }
            i++;
         }
         tid = int(setTimeout(function():void
         {
            if(fun != null)
            {
               fun();
            }
            boss0.play();
            clearTimeout(tid);
         },this.shadowtweenTime + 100));
      }
      
      private function showBossShadowGatherMv(param1:Function) : void
      {
         var tid:int = 0;
         var bossMv:MovieClip = null;
         var fun:Function = param1;
         var bossNum:int = this.ALL_BOSS_NUM - this._currentStage;
         var i:int = 1;
         while(i < this.ALL_BOSS_NUM)
         {
            bossMv = this._gameMv["boss" + i];
            if(bossMv && bossMv.visible == true && i != this._currentBossIndex)
            {
               this.setBossPosition(i,true);
            }
            i++;
         }
         tid = int(setTimeout(function():void
         {
            clearTimeout(tid);
            fun();
         },this.shadowtweenTime + 100));
      }
      
      private function setBossPosition(param1:int, param2:Boolean = false) : void
      {
         var bf:BlurFilter;
         var obj:Object;
         var bossMv:MovieClip = null;
         var startPosition:Point = null;
         var targetPosition:Point = null;
         var index:int = param1;
         var isBack:Boolean = param2;
         bossMv = this._gameMv["boss" + index];
         if(null == bossMv)
         {
            return;
         }
         bossMv.gotoAndStop(1);
         bossMv.visible = true;
         bf = new BlurFilter(21,5,BitmapFilterQuality.LOW);
         bossMv.filters = [bf];
         startPosition = isBack ? this._bossPositions[index] : this._bossPositions[0];
         targetPosition = isBack ? this._bossPositions[0] : this._bossPositions[index];
         bossMv.x = startPosition.x;
         bossMv.y = startPosition.y;
         obj = {
            "x":targetPosition.x,
            "y":targetPosition.y,
            "onComplete":function():void
            {
               bossMv.play();
               bossMv.filters = [];
            }
         };
         TweenLite.to(bossMv,this.shadowtweenTime / 1000,obj);
      }
      
      private function showRealBoosTip(param1:Function = null) : void
      {
         var _loc2_:MovieClip = this._gameMv["tip" + this._currentBossIndex];
         _loc2_.gotoAndStop(8);
         this.playTip(_loc2_,param1);
      }
      
      private function playTip(param1:MovieClip, param2:Function) : void
      {
         var tid:int = 0;
         var tip:MovieClip = param1;
         var fun:Function = param2;
         tip.visible = true;
         tip.scaleX = tip.scaleY = 0;
         TweenLite.to(tip,this.tipTweenTime / 1000,{
            "scaleX":1,
            "scaleY":1
         });
         tid = int(setTimeout(function():void
         {
            tip.visible = false;
            clearTimeout(tid);
            if(fun != null)
            {
               fun();
            }
         },this.tipTweenTime + 1000));
      }
      
      private function showStartTip(param1:Function = null) : void
      {
         var _loc2_:int = int(NumberUtils.random(0,this.ALL_BOSS_NUM - this._currentStage - 1));
         while(_loc2_ == this._currentBossIndex)
         {
            _loc2_ = int(NumberUtils.random(0,this.ALL_BOSS_NUM - this._currentStage - 1));
         }
         if(this._currentStage == 0)
         {
            _loc2_ = 0;
         }
         var _loc3_:MovieClip = this._gameMv["tip" + _loc2_];
         _loc3_.gotoAndStop(this._currentStage + 1);
         this.playTip(_loc3_,param1);
      }
      
      private function showLoseTip(param1:Function = null) : void
      {
         var _loc2_:int = 0;
         if(this._isRealBoss)
         {
            _loc2_ = this._currentBossIndex;
         }
         else
         {
            _loc2_ = int(NumberUtils.random(0,this.ALL_BOSS_NUM - this._currentStage - 1));
         }
         var _loc3_:MovieClip = this._gameMv["tip" + _loc2_];
         _loc3_.gotoAndStop(7);
         this.playTip(_loc3_,param1);
      }
      
      private function showFindTip(param1:Function = null) : void
      {
         var _loc2_:MovieClip = this._gameMv["tip" + this._currentBossIndex];
         _loc2_.gotoAndStop(8);
         this.playTip(_loc2_,param1);
      }
      
      private function hideAllTip() : void
      {
         var _loc2_:MovieClip = null;
         var _loc1_:int = 0;
         while(_loc1_ < this.ALL_BOSS_NUM)
         {
            _loc2_ = this._gameMv["tip" + _loc1_];
            _loc2_.visible = false;
            _loc1_++;
         }
      }
      
      private function hideAllBoss() : void
      {
         var _loc2_:MovieClip = null;
         var _loc3_:DisplayObject = null;
         var _loc1_:int = 0;
         while(_loc1_ < this.ALL_BOSS_NUM)
         {
            _loc2_ = this._gameMv["boss" + _loc1_];
            _loc3_ = this._gameMv["dock" + _loc1_];
            if(_loc2_ != null)
            {
               _loc2_.visible = false;
            }
            if(_loc3_ != null)
            {
               _loc3_.visible = false;
            }
            _loc1_++;
         }
      }
      
      private function fight() : void
      {
         this._isRealBoss = false;
         ItemManager.updateItems([1700364,1700365],function():void
         {
            var _loc1_:Object = {};
            _loc1_["1700364"] = ItemManager.getNumByID(1700364);
            _loc1_["1700365"] = ItemManager.getNumByID(1700365);
            StaticObjectControll.setObjectByKey("black_buluke",_loc1_);
         });
         this._gameMv.mouseChildren = this._gameMv.mouseEnabled = false;
         SocketConnection.sendWithCallback(CommandID.SKY_CITY_GET_BOSS_REGION,function(param1:SocketEvent):void
         {
            var b:ByteArray;
            var region:int = 0;
            var tid:int = 0;
            var e:SocketEvent = param1;
            _gameMv.mouseChildren = _gameMv.mouseEnabled = true;
            b = e.data as ByteArray;
            region = int(b.readUnsignedInt());
            if(region == 251)
            {
               _isRealBoss = true;
               _currentBossIndex = 0;
               _gameMv.mouseChildren = _gameMv.mouseEnabled = false;
               showBossShadowGatherMv(function():void
               {
                  showRealBoosTip(function():void
                  {
                     FightManager.fightNoMapBoss("暗黑托鲁克",region);
                  });
               });
            }
            else
            {
               _gameMv.mouseChildren = _gameMv.mouseEnabled = false;
               tid = int(setTimeout(function():void
               {
                  _gameMv.mouseChildren = _gameMv.mouseEnabled = true;
                  clearTimeout(tid);
               },1000));
               FightManager.fightNoMapBoss("暗黑托鲁克的分身",region);
            }
         });
      }
      
      private function fightOverHandler(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         this.showActor();
         if(MapManager.currentMap.id != 965 || [251,252].indexOf(FightManager.currentBossRegion) == -1)
         {
            return;
         }
         this.hideAllTip();
         LevelManager.showOrRemoveMapLevelandToolslevel(false);
         LevelManager.iconLevel.visible = false;
         LevelManager.appLevel.addChild(this._game);
         info = e.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            this._gameMv.mouseChildren = this._gameMv.mouseEnabled = false;
            ModuleManager.showModule(ClientConfig.getAppModule("BlackTuolukeClearingPanel"),"正在打开...",function():void
            {
               _gameMv.mouseChildren = _gameMv.mouseEnabled = true;
               if(_isRealBoss)
               {
                  leave();
               }
               else
               {
                  _gameMv.mouseChildren = _gameMv.mouseEnabled = false;
                  playShadowDefeatMv(function():void
                  {
                     ++_currentStage;
                     showStartTip(function():void
                     {
                        showBossShadowGatherMv(function():void
                        {
                           if(_currentStage >= 6)
                           {
                              showLoseTip(leave);
                           }
                           else
                           {
                              showBossShadowMv(function():void
                              {
                                 _gameMv.mouseChildren = _gameMv.mouseEnabled = true;
                              });
                           }
                        });
                     });
                  });
               }
            });
         }
         else if(info.reason == 5)
         {
            this._gameMv.mouseChildren = this._gameMv.mouseEnabled = true;
         }
         else
         {
            this._gameMv.mouseChildren = this._gameMv.mouseEnabled = false;
            this.showLoseTip(this.leave);
         }
      }
      
      public function playShadowDefeatMv(param1:Function) : void
      {
         var bossMv:MovieClip;
         var fun:Function = param1;
         this._disappearMv.gotoAndStop(1);
         this._gameMv.addChild(this._disappearMv);
         this._disappearMv.x = this._bossPositions[this._currentBossIndex].x;
         this._disappearMv.y = this._bossPositions[this._currentBossIndex].y;
         bossMv = this._gameMv["boss" + this._currentBossIndex];
         bossMv.visible = false;
         AnimateManager.playMcAnimate(this._disappearMv,0,"",function():void
         {
            fun();
            _gameMv.removeChild(_disappearMv);
         });
      }
      
      private function onLeveBtnCLick(param1:*) : void
      {
         var e:* = param1;
         Alert.show("确定要离开吗？",function():void
         {
            SocketConnection.send(CommandID.SKY_CITY_BLACKTUOLUKE_LEVAVE);
            leave();
         });
      }
      
      private function onPetBagHandler(param1:MouseEvent) : void
      {
         FightPetBagController.show();
      }
      
      private function showActor() : void
      {
         this._gameMv.addChild(MainManager.actorModel);
         MainManager.actorModel.x = 394;
         MainManager.actorModel.y = 476;
      }
      
      public function leave() : void
      {
         MapManager.currentMap.depthLevel.addChild(MainManager.actorModel);
         this._elm.clear();
         this._elm = null;
         SoundManager.playSound();
         ToolTipManager.remove(this._gameMv["leave_btn"]);
         ToolTipManager.remove(this._gameMv["bag"]);
         DisplayUtil.removeForParent(this._gameMv);
         DisplayUtil.removeForParent(this._game);
         this._game = this._gameMv = null;
         ToolBarController.panel.show();
         LevelManager.iconLevel.visible = true;
         LevelManager.showOrRemoveMapLevelandToolslevel(true);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.fightOverHandler);
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_OPEN,this.onMapChange);
      }
   }
}
