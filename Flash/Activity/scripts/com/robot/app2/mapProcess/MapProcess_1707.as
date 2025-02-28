package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.aimat.AimatGridPanel;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import flash.events.MouseEvent;
   import flash.utils.Timer;
   
   public class MapProcess_1707 extends BaseMapProcess
   {
       
      
      private var _isHideBar:Boolean = false;
      
      private var _numArr:Array;
      
      private var _curShowIndex:int = 0;
      
      private var _isOpenBtns:Boolean = true;
      
      private var _isGetReward:Boolean = false;
      
      private var _animatePlaying:Boolean = false;
      
      private var _timer:Timer;
      
      private var _num_0:int = 0;
      
      private var _num_1:int = 0;
      
      public function MapProcess_1707()
      {
         this._numArr = new Array();
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         btnLevel.addEventListener(MouseEvent.CLICK,this.onBtnclickHandle);
         conLevel.addEventListener(MouseEvent.CLICK,this.onConclickHandle);
         btnLevel["desMc"].visible = false;
         if(MainManager.isFighting)
         {
            conLevel["arendtMc"].gotoAndStop(1);
            conLevel["arendtMc"].mouseChildren = false;
            conLevel["arendtMc"].mouseEnabled = false;
            conLevel["ceilingMc"].gotoAndStop(1);
            conLevel["ceilingMc"].mouseChildren = false;
            conLevel["ceilingMc"].mouseEnabled = false;
            conLevel["flowerMc"].gotoAndStop(2);
            conLevel["flowerMc"].mouseChildren = false;
            conLevel["flowerMc"].mouseEnabled = false;
            conLevel["crystalMc"].visible = !FightManager.isWin;
         }
         else
         {
            conLevel["arendtMc"].gotoAndStop(1);
            conLevel["ceilingMc"].gotoAndStop(1);
            conLevel["ceilingMc"].mouseChildren = false;
            conLevel["ceilingMc"].mouseEnabled = false;
            conLevel["flowerMc"].gotoAndStop(1);
            conLevel["flowerMc"].mouseChildren = false;
            conLevel["flowerMc"].mouseEnabled = false;
            conLevel["crystalMc"].gotoAndStop(1);
         }
         this.update();
      }
      
      private function update() : void
      {
         KTool.getMultiValue([11901],function(param1:Array):void
         {
            _num_0 = KTool.subByte(param1[0],0,8);
            _num_1 = KTool.subByte(param1[0],8,8);
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
               btnLevel["immersionModelBtn"].visible = false;
               btnLevel["guideBtn"].visible = false;
               btnLevel["btnMc"].gotoAndStop(2);
               break;
            case "showBtn":
               btnLevel["immersionModelBtn"].visible = true;
               btnLevel["guideBtn"].visible = true;
               btnLevel["btnMc"].gotoAndStop(1);
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
               btnLevel["desMc"].visible = true;
               break;
            case "closeDescBtn":
               btnLevel["desMc"].visible = false;
         }
      }
      
      private function onConclickHandle(param1:MouseEvent) : void
      {
         var index1:int = 0;
         var e:MouseEvent = param1;
         var btnName:String = String(e.target.name);
         var index:int = int(KTool.getIndex(e.target));
         switch(btnName)
         {
            case "arendtBtn":
               AnimateManager.playMcAnimate(conLevel["arendtMc"],2,"mc2",function():void
               {
                  conLevel["arendtMc"].gotoAndStop(1);
                  conLevel["arendtMc"].mouseChildren = false;
                  conLevel["arendtMc"].mouseEnabled = false;
                  conLevel["ceilingMc"].mouseChildren = true;
                  conLevel["ceilingMc"].mouseEnabled = true;
               },false,true);
               break;
            case "ceilingBtn":
               AnimateManager.playMcAnimate(conLevel["ceilingMc"],2,"mc2",function():void
               {
                  conLevel["ceilingMc"].gotoAndStop(1);
                  conLevel["ceilingMc"].mouseChildren = false;
                  conLevel["ceilingMc"].mouseEnabled = false;
                  conLevel["flowerMc"].mouseChildren = true;
                  conLevel["flowerMc"].mouseEnabled = true;
                  playMc();
               },false,true);
               break;
            case "flower_clloseBtn":
               AnimateManager.playMcAnimate(conLevel["flowerMc"],3,"mc3",function():void
               {
                  conLevel["flowerMc"].gotoAndStop(2);
                  conLevel["flowerMc"].mouseChildren = false;
                  conLevel["flowerMc"].mouseEnabled = false;
                  AnimateManager.playMcAnimate(conLevel["arendtMc"],3,"mc3",function():void
                  {
                     conLevel["arendtMc"].gotoAndStop(1);
                     conLevel["arendtMc"].mouseChildren = false;
                     conLevel["arendtMc"].mouseEnabled = false;
                     AnimateManager.playMcAnimate(conLevel["crystalMc"],3,"mc3",function():void
                     {
                        conLevel["crystalMc"].gotoAndStop(2);
                     },false,true);
                  },false,true);
               },false,true);
               break;
            case "moundBtn":
               if(this._num_0 < 4)
               {
                  KTool.socketSendCallBack(45850,function():void
                  {
                     update();
                  },[25,1]);
               }
               else
               {
                  Alarm2.show("获得积累经验次数已达今日上限。");
               }
               break;
            case "crystalBtn":
               if(this._num_1 < 5)
               {
                  Alert.show("金刚石光泽黯淡，是否要进行开采？",function():void
                  {
                     KTool.socketSendCallBack(45850,function():void
                     {
                        update();
                     },[25,2]);
                  });
               }
               else
               {
                  Alarm2.show("开采已达今日上限。");
               }
               break;
            case "getRewardBtn":
               Alert.show("金刚石正在焕发光泽！是否要挑战其中的精灵？",function():void
               {
                  FightManager.fightWithBoss("石晶晶",0);
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOverHandler);
               });
         }
      }
      
      private function onFightOverHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onFightOverHandler);
      }
      
      private function playMc() : void
      {
         if(!AnimateManager.AnimatePlaying)
         {
            conLevel["playMc"]["g1Mc"].gotoAndStop(1);
            AnimateManager.playMcAnimate(conLevel["playMc"],1,"g1Mc",function():void
            {
               conLevel["playMc"]["g1Mc"].gotoAndStop(1);
            });
            conLevel["playMc"]["g2Mc"].gotoAndStop(1);
            AnimateManager.playMcAnimate(conLevel["playMc"],1,"g2Mc",function():void
            {
               conLevel["playMc"]["g2Mc"].gotoAndStop(1);
            });
            conLevel["playMc"]["g3Mc"].gotoAndStop(1);
            AnimateManager.playMcAnimate(conLevel["playMc"],1,"g3Mc",function():void
            {
               conLevel["playMc"]["g3Mc"].gotoAndStop(1);
            });
            conLevel["playMc"]["g4Mc"].gotoAndStop(1);
            AnimateManager.playMcAnimate(conLevel["playMc"],1,"g4Mc",function():void
            {
               conLevel["playMc"]["g4Mc"].gotoAndStop(1);
            });
            conLevel["playMc"]["g5Mc"].gotoAndStop(1);
            AnimateManager.playMcAnimate(conLevel["playMc"],1,"g5Mc",function():void
            {
               conLevel["playMc"]["g5Mc"].gotoAndStop(1);
            });
            conLevel["playMc"]["g6Mc"].gotoAndStop(1);
            AnimateManager.playMcAnimate(conLevel["playMc"],1,"g6Mc",function():void
            {
               conLevel["playMc"]["g6Mc"].gotoAndStop(1);
            });
         }
      }
      
      override public function destroy() : void
      {
         btnLevel.removeEventListener(MouseEvent.CLICK,this.onBtnclickHandle);
         conLevel.removeEventListener(MouseEvent.CLICK,this.onConclickHandle);
         ToolBarController.panel.setIconLevel(true);
         this._numArr = null;
         AimatGridPanel.hide();
         super.destroy();
      }
   }
}
