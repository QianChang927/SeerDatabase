package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.ui.alert.Alarm2;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import org.taomee.events.SocketEvent;
   
   public class StarlightPanoCupAwardsCeremonyMainPanel extends ActivityModel
   {
      private var _commdId:int;
      
      private var _itemNum:int;
      
      private var _chooseTeam:Boolean = false;
      
      private var _timeoutId:uint;
      
      public function StarlightPanoCupAwardsCeremonyMainPanel()
      {
         super();
         resUrl = "2024/1101/StarlightPanoCupAwardsCeremonyMainPanel";
         configUrl = "2024/1101/starlightPanoCupAwardsCeremonyConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
         _mainUI.mc.alpha = 0;
         _mainUI.mc.scaleX = 0.1;
         _mainUI.mc.scaleY = 0.1;
         closeEvent();
         TweenLite.to(_mainUI.mc,1,{
            "alpha":1,
            "scaleX":1,
            "scaleY":1,
            "onComplete":function():void
            {
               _timeoutId = setTimeout(function():void
               {
                  clearTimeout(_timeoutId);
                  TweenLite.to(_mainUI.mc,1,{
                     "alpha":0,
                     "scaleX":0.1,
                     "scaleY":0.1,
                     "onComplete":function():void
                     {
                        openEvent();
                     }
                  });
               },2500);
            }
         });
         StatManager.sendStat2014("1101星光·帕诺杯颁奖典礼","进入星光·帕诺杯颁奖典礼活动面板","2024运营活动");
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btnName:String = e.target.name;
         var index:int = int(KTool.getIndex(e.target));
         var index1:int = int(KTool.getIndex(e.target.parent));
         switch(btnName)
         {
            case "closeBtn":
               this.hide();
               break;
            case "playBtn":
               BitBuffSetClass.setState(24511,1);
               StatManager.sendStat2014("1101星光·帕诺杯颁奖典礼","点击【观看动画】播放全屏动画","2024运营活动");
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_starlightPanoCupAwardsCeremony"),function():void
               {
                  refresh();
               });
               break;
            case "getRewardBtn":
               if(this._chooseTeam)
               {
                  sendCmd(this._commdId,[2],function():void
                  {
                     refresh();
                  });
               }
               else
               {
                  Alarm2.show("很抱歉，您未参与过星光·帕诺杯活动，无法领取奖励。");
               }
               break;
            case "rePlayBtn":
               StatManager.sendStat2014("1101星光·帕诺杯颁奖典礼","点击【剧情回顾】播放全屏动画","2024运营活动");
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_starlightPanoCupAwardsCeremony"));
         }
      }
      
      override protected function updatePanel() : void
      {
         var forever_121899:int;
         var forever_108523:int;
         var isInTime:Boolean;
         var scoreArr:Array = null;
         this._commdId = getValue("comId")[0];
         forever_121899 = int(getValue("forever_121899"));
         forever_108523 = int(getValue("forever_108523"));
         this._chooseTeam = forever_108523 > 0 ? true : false;
         _mainUI.rePlayBtn.visible = true;
         if(forever_121899 > 0)
         {
            _mainUI.btnMc.gotoAndStop(3);
         }
         else if(BitBuffSetClass.getState(24511) == 0)
         {
            _mainUI.btnMc.gotoAndStop(1);
            _mainUI.rePlayBtn.visible = false;
         }
         else
         {
            _mainUI.btnMc.gotoAndStop(2);
         }
         scoreArr = [];
         sendCmd(this._commdId,[1],function(event:SocketEvent):void
         {
            var score:int = 0;
            var by:ByteArray = event.data as ByteArray;
            for(var i:int = 0; i < 3; i++)
            {
               score = int(by.readUnsignedInt());
               scoreArr.push(score);
               _mainUI["scoreTx_" + i].text = String(score);
            }
         },null,true);
         isInTime = Boolean(SystemTimerManager.getIsInActivity("20241101","2024110810"));
         if(!isInTime)
         {
            Alarm2.show("活动已结束",function():void
            {
               hide();
            });
         }
      }
      
      override public function hide() : void
      {
         clearTimeout(this._timeoutId);
         super.hide();
      }
   }
}

