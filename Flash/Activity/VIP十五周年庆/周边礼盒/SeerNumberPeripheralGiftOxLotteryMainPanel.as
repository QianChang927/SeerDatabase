package com.robot.module.app
{
   import com.robot.app.control.PanelHideEffectController;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.ActivityTimeControl;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CronTimeVo;
   import flash.events.Event;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   
   public class SeerNumberPeripheralGiftOxLotteryMainPanel extends ActivityModel
   {
      private var _commdId:int;
      
      private var _itemNum:int;
      
      private var _requireItemArray:Array;
      
      private var _infoPanel:SeerNumberPeripheralGiftOxLotteryInfoView;
      
      private var cron1:Array;
      
      private var ac1:ActivityControl;
      
      private var _rewardIndex:int = 0;
      
      private var _forever_120204:int;
      
      public function SeerNumberPeripheralGiftOxLotteryMainPanel()
      {
         this.cron1 = [new CronTimeVo("*","8-22","*","*","*","*")];
         super();
         resUrl = "2024/1115/SeerNumberPeripheralGiftOxLotteryMainPanel";
         configUrl = "2024/1115/seerNumberPeripheralGiftOxLotteryConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
         StatManager.sendStat2014("0701邮政联动","打开活动面板","2022运营活动");
         this._infoPanel = new SeerNumberPeripheralGiftOxLotteryInfoView(_mainUI["infoMc"],1);
         this._infoPanel.hide();
         EventManager.addEventListener("seerNumberPeripheralGiftOxLottery",this.onRefreshHandle);
         _mainUI.tipsMc_0.visible = false;
         _mainUI.tipsMc_1.visible = false;
         _mainUI.alarmMc.visible = false;
         if(BitBuffSetClass.getState(24518) == 0)
         {
            BitBuffSetClass.setState(24518,1);
            _mainUI.tipsMc_0.visible = true;
         }
         _mainUI.playMc.visible = false;
      }
      
      private function onRefreshHandle(e:Event) : void
      {
         refresh();
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var date1:Date = null;
         var dateTime:int = 0;
         var regTime:int = 0;
         var btnName:String = e.target.name;
         var index:int = int(KTool.getIndex(e.target));
         switch(btnName)
         {
            case "closeBtn":
               PanelHideEffectController.setup(_ui,new Point(250,80));
               this.hide();
               break;
            case "descBtn":
               _mainUI.tipsMc_0.visible = true;
               StatManager.sendStat2014("0701邮政联动","点击打开活动说明面板","2022运营活动");
               break;
            case "close0":
               _mainUI.tipsMc_0.visible = false;
               break;
            case "rewardListBtn":
               this.updaterewardList();
               _mainUI.tipsMc_1.visible = true;
               break;
            case "close1":
               _mainUI.tipsMc_1.visible = false;
               break;
            case "chouquBtn":
               date1 = SystemTimerManager.get0DateByStr("20240701");
               dateTime = date1.time / 1000;
               regTime = int(MainManager.actorInfo.regTime);
               if(regTime >= dateTime)
               {
                  if(this._forever_120204 < 127)
                  {
                     Alarm2.show("请先完成新手教程，并领取新手七日礼的活动奖励后再来抽取！");
                     return;
                  }
               }
               closeEvent();
               _mainUI.playMc.visible = true;
               AnimateManager.playMcAnimate(_mainUI,1,"playMc",function():void
               {
                  _mainUI.playMc.visible = false;
                  openEvent();
                  KTool.socketSendCallBack(41388,function(e:SocketEvent):void
                  {
                     var by:ByteArray = e.data as ByteArray;
                     by.position = 0;
                     _rewardIndex = by.readUnsignedInt();
                     Alarm2.show("助力成功！幸运赛尔将于明日公布~");
                     refresh();
                  },[79,1]);
               },false,true);
               break;
            case "fillInBtn":
               this._infoPanel.show(1);
         }
      }
      
      protected function updaterewardList() : void
      {
         var nowdata:Date = SystemTimerManager.sysBJDate;
         var time:Number = nowdata.time / 1000 - 24 * 60 * 60;
         var predata:Date = new Date(time * 1000);
         var str:String = SystemTimerManager.getDateString(predata);
         KTool.getRangeRankList(193,int(str),0,99,function(list:Array):void
         {
            var i:int = 0;
            var obj:Object = null;
            var str:String = null;
            var str2:String = null;
            var str1:String = null;
            var str0:String = null;
            if(list.length > 0)
            {
               _mainUI.tipsMc_1.gotoAndStop(1);
               for(i = 0; i < 24; i++)
               {
                  if(i < list.length)
                  {
                     obj = list[i] as Object;
                     str = String(obj.userid);
                     str2 = str.substr(str.length - 4,4);
                     str1 = "**";
                     str0 = str.substr(0,str.length - 6);
                     _mainUI.tipsMc_1.mc["userIdTx_" + i].text = str0 + str1 + str2;
                  }
                  else
                  {
                     _mainUI.tipsMc_1.mc["userIdTx_" + i].text = "无";
                  }
               }
            }
            else
            {
               _mainUI.tipsMc_1.gotoAndStop(2);
            }
         });
      }
      
      override protected function updatePanel() : void
      {
         var forever_121901:int = 0;
         var daily_201776:int = 0;
         this._commdId = getValue("comId")[0];
         this._forever_120204 = getValue("forever_120204");
         forever_121901 = int(getValue("forever_121901"));
         daily_201776 = int(getValue("daily_201776"));
         sendCmd(41388,[79,2],function(e:SocketEvent):void
         {
            var by:ByteArray = e.data as ByteArray;
            var iszhongjiang:Boolean = by.readUnsignedInt() > 0;
            if(ActivityTimeControl.getIsinTime(432))
            {
               if(iszhongjiang)
               {
                  _mainUI.alarmMc.visible = true;
                  if(BitUtils.getBit(forever_121901,1) > 0)
                  {
                     _mainUI.btnMc.gotoAndStop(6);
                  }
                  else
                  {
                     _mainUI.btnMc.gotoAndStop(5);
                  }
               }
               else if(ActivityTimeControl.getIsinTime(431))
               {
                  if(daily_201776 > 0)
                  {
                     _mainUI.btnMc.gotoAndStop(3);
                  }
                  else if(isInAcTime())
                  {
                     _mainUI.btnMc.gotoAndStop(2);
                  }
                  else
                  {
                     _mainUI.btnMc.gotoAndStop(1);
                  }
               }
               else
               {
                  _mainUI.btnMc.gotoAndStop(4);
               }
            }
            else
            {
               Alarm2.show("活动已结束！");
            }
         },null,true);
      }
      
      public function isInAcTime() : Boolean
      {
         if(this.ac1 == null)
         {
            this.ac1 = new ActivityControl(this.cron1);
         }
         var nowDate:Date = SystemTimerManager.sysBJDate;
         if(this.ac1.isInActivityTime)
         {
            return true;
         }
         return false;
      }
      
      override public function hide() : void
      {
         if(this._infoPanel != null)
         {
            this._infoPanel.destroy();
         }
         this._requireItemArray = null;
         this.cron1 = null;
         this.ac1 = null;
         super.hide();
      }
   }
}

