package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.aimat.AimatGridPanel;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.info.AimatInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.geom.Point;
   import flash.utils.Timer;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_1706 extends BaseMapProcess
   {
       
      
      private var _isHideBar:Boolean = false;
      
      private var _numArr:Array;
      
      private var _curShowIndex:int = 0;
      
      private var _isOpenBtns:Boolean = true;
      
      private var _isGetReward:Boolean = false;
      
      private var _animatePlaying:Boolean = false;
      
      private var _timer:Timer;
      
      public function MapProcess_1706()
      {
         this._numArr = new Array();
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         conLevel["treeMc"].mouseChildren = false;
         conLevel["treeMc"].mouseEnabled = false;
         btnLevel.addEventListener(MouseEvent.CLICK,this.onBtnclickHandle);
         conLevel.addEventListener(MouseEvent.CLICK,this.onConclickHandle);
         AimatController.addEventListener(AimatEvent.PLAY_END,this.onAimatEnd);
         this.playBallMc();
         this._timer = new Timer(3000,0);
         this._timer.addEventListener(TimerEvent.TIMER,this.onTimer);
         this._timer.start();
         this.update();
      }
      
      private function update() : void
      {
         KTool.getMultiValue([11898],function(param1:Array):void
         {
            _isGetReward = param1[0] >= 5;
         });
      }
      
      private function onBtnclickHandle(param1:MouseEvent) : void
      {
         var _loc4_:int = 0;
         var _loc2_:String = String(param1.target.name);
         var _loc3_:int = int(KTool.getIndex(param1.target));
         switch(_loc2_)
         {
            case "hideBtn":
               btnLevel["flameShootBtn"].visible = false;
               btnLevel["immersionModelBtn"].visible = false;
               btnLevel["guideBtn"].visible = false;
               btnLevel["btnMc"].gotoAndStop(2);
               break;
            case "showBtn":
               btnLevel["flameShootBtn"].visible = true;
               btnLevel["immersionModelBtn"].visible = true;
               btnLevel["guideBtn"].visible = true;
               btnLevel["btnMc"].gotoAndStop(1);
               break;
            case "flameShootBtn":
               if(MainManager.actorInfo.petMaxLev < 30)
               {
                  SocketConnection.send(1022,84807313);
               }
               SocketConnection.send(1020,157);
               param1.stopImmediatePropagation();
               AimatGridPanel.show();
               break;
            case "immersionModelBtn":
               if(!this._isHideBar)
               {
                  MapObjectControl.hideOrShowAllObjects(false);
                  ToolBarController.showOrHideAllUser(false);
                  ToolBarController.panel.setIconLevel(false);
                  this._isHideBar = true;
               }
               else
               {
                  MapObjectControl.hideOrShowAllObjects(true);
                  ToolBarController.showOrHideAllUser(true);
                  ToolBarController.panel.setIconLevel(true);
                  this._isHideBar = false;
               }
               break;
            case "guideBtn":
               Alarm2.show("使用头部射击即可点燃藤蔓，打开通路，说不定还有意外惊喜！");
         }
      }
      
      private function onConclickHandle(param1:MouseEvent) : void
      {
         var index1:int = 0;
         var _isRight:Boolean = false;
         var value:int = 0;
         var i:int = 0;
         var e:MouseEvent = param1;
         var btnName:String = String(e.target.name);
         var index:int = int(KTool.getIndex(e.target));
         switch(btnName)
         {
            case "displayBtn":
               AnimateManager.playMcAnimate(conLevel["displayMc"],2,"mc2",function():void
               {
                  conLevel["displayMc"].gotoAndStop(1);
               },false,true);
               break;
            case "getRewardBtn":
               if(!this._isGetReward)
               {
                  KTool.socketSendCallBack(45850,function():void
                  {
                     conLevel["getRewardBtn"].visible = false;
                     update();
                  },[23,1]);
               }
               else
               {
                  Alarm2.show("今日地心光合能量收集已达到上限");
               }
               break;
            case "clickBtn":
               index1 = int(KTool.getIndex(e.target.parent));
               this._numArr.push(index1);
               conLevel["ballMc_" + index1].gotoAndStop(2);
               if(this._numArr.length >= 4)
               {
                  _isRight = true;
                  for each(value in this._numArr)
                  {
                     if(this._numArr.indexOf(value) != value)
                     {
                        _isRight = false;
                     }
                  }
                  if(_isRight)
                  {
                     this._timer.stop();
                  }
                  else
                  {
                     this._numArr = [];
                     i = 0;
                     while(i < 4)
                     {
                        if(conLevel["ballMc_" + i].currentFrame == 2)
                        {
                           conLevel["ballMc_" + i].gotoAndStop(1);
                        }
                        i++;
                     }
                  }
               }
         }
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         if(this._curShowIndex > 3)
         {
            this._curShowIndex = 0;
         }
         this.playBallMc();
      }
      
      private function playBallMc() : void
      {
         if(!AnimateManager.AnimatePlaying)
         {
            AnimateManager.playMcAnimate(conLevel["ballMc_" + this._curShowIndex],3,"mc3",function():void
            {
               if(_numArr != null && conLevel["ballMc_" + _curShowIndex] != null)
               {
                  if(_numArr.indexOf(_curShowIndex) == -1)
                  {
                     conLevel["ballMc_" + _curShowIndex].gotoAndStop(1);
                  }
                  else
                  {
                     conLevel["ballMc_" + _curShowIndex].gotoAndStop(2);
                  }
                  ++_curShowIndex;
               }
            },false,false);
         }
      }
      
      private function onAimatEnd(param1:AimatEvent) : void
      {
         var event:AimatEvent = param1;
         var aimatInfo:AimatInfo = event.info;
         var point:Point = LevelManager.mapLevel.localToGlobal(aimatInfo.endPos);
         if(conLevel["treeHitMc"].visible && (conLevel["treeHitMc"] as MovieClip).currentFrame == 1 && Boolean(conLevel["treeHitMc"].hitTestPoint(point.x,point.y)))
         {
            AnimateManager.playMcAnimate(conLevel["treeMc"],3,"mc3",function():void
            {
               if(conLevel["treeMc"] != null)
               {
                  conLevel["treeMc"].gotoAndStop(2);
                  conLevel["treeMc"].visible = false;
                  conLevel["treeHitMc"].visible = false;
                  DisplayUtil.removeForParent(typeLevel["mc"]);
                  MapManager.currentMap.makeMapArray();
               }
            },false,true);
         }
      }
      
      override public function destroy() : void
      {
         btnLevel.removeEventListener(MouseEvent.CLICK,this.onBtnclickHandle);
         conLevel.removeEventListener(MouseEvent.CLICK,this.onConclickHandle);
         AimatController.removeEventListener(AimatEvent.PLAY_END,this.onAimatEnd);
         LevelManager.iconLevel.visible = true;
         MapObjectControl.hideOrShowAllObjects(true);
         ToolBarController.showOrHideAllUser(true);
         SystemTimerManager.removeTickFun(this.onTimer);
         this._timer.removeEventListener(TimerEvent.TIMER,this.onTimer);
         this._numArr = null;
         AimatGridPanel.hide();
         super.destroy();
      }
   }
}
