package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import flash.utils.ByteArray;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   
   public class XingGuangPaNuoBeiMainPanel extends ActivityModel
   {
      private var _curPlayer:int;
      
      private var _IsOK:Boolean = true;
      
      public function XingGuangPaNuoBeiMainPanel()
      {
         super();
         resUrl = "2024/1011/XingGuangPaNuoBeiMainPanel";
         configUrl = "2024/1011/XingGuangPaNuoBei";
      }
      
      override public function show() : void
      {
         super.show();
         _ui["movie"].gotoAndStop(1);
         _ui["movie"]["mc"].gotoAndStop(1);
         _ui["movie"].visible = false;
         StatManager.sendStat2014("1011星光·帕诺杯计分板","打开了星光·帕诺杯计分板（集合面板）","2024运营活动");
      }
      
      override protected function updatePanel() : void
      {
         this._curPlayer = getValue("curplayer");
         if(this._curPlayer == 0)
         {
            _ui["btnmc"].gotoAndStop(1);
         }
         else
         {
            _ui["btnmc"].gotoAndStop(this._curPlayer + 1);
         }
         this.updateDisplay();
      }
      
      private function updateDisplay() : void
      {
         if(BitBuffSetClass.getState(24497) == 0)
         {
            _ui["aniPage"].visible = true;
            closeEvent();
            AnimateManager.playMcAnimate(_ui["aniPage"],1,"ani",function():void
            {
               openEvent();
               _ui["aniPage"].visible = false;
               BitBuffSetClass.setState(24497,1);
            },false,true);
         }
         else
         {
            _ui["aniPage"].visible = false;
         }
         if(!SystemTimerManager.getIsInActivity("20241018","*"))
         {
            _ui["mc_2"].gotoAndStop(1);
         }
         else
         {
            _ui["mc_2"].gotoAndStop(2);
         }
         if(!SystemTimerManager.getIsInActivity("20241025","*"))
         {
            _ui["mc_3"].gotoAndStop(1);
         }
         else
         {
            _ui["mc_3"].gotoAndStop(2);
         }
         SocketConnection.sendByQueue(41860,[1],function(e:SocketEvent):void
         {
            var byte:ByteArray = e.data as ByteArray;
            for(var k:int = 0; k < 3; k++)
            {
               _ui["numTxt_" + (k + 1)].text = byte.readUnsignedInt();
            }
         });
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btn_name:String = e.target.name;
         var index:int = int(e.target.name.split("_")[1]);
         switch(btn_name)
         {
            case "close":
               this.hide();
               break;
            case "zy":
               StatManager.sendStat2014("1011星光·帕诺杯计分板","进行了阵营抽取","2024运营活动");
               SocketConnection.sendByQueue(41299,[1,1],function(e:SocketEvent):void
               {
                  var byte:ByteArray = e.data as ByteArray;
                  var result:int = int(byte.readUnsignedInt());
                  moviePlay(result);
               });
               break;
            case "refreshBtn":
               if(this._IsOK == true)
               {
                  StatManager.sendStat2014("1011星光·帕诺杯计分板","点击【积分刷新】按钮","2024运营活动");
                  this._IsOK = false;
                  SocketConnection.sendByQueue(41860,[1],function(e:SocketEvent):void
                  {
                     var k:int;
                     var byte:ByteArray = e.data as ByteArray;
                     for(k = 0; k < 3; k++)
                     {
                        _ui["numTxt_" + (k + 1)].text = byte.readUnsignedInt();
                     }
                     setTimeout(function():void
                     {
                        _IsOK = true;
                     },1000);
                  });
               }
               else
               {
                  Alarm2.show("操作太快了，稍微休息一下吧~");
               }
               break;
            case "goto_" + index:
               if(index == 1)
               {
                  StatManager.sendStat2014("1011星光·帕诺杯计分板","点击【海啸擂台】按钮","2024运营活动");
                  this.hide();
                  ModuleManager.showAppModule("XingGuangPaNuoBeiS1Panel");
               }
               else if(index == 2)
               {
                  StatManager.sendStat2014("1011星光·帕诺杯计分板","点击【烈焰擂台】按钮","2024运营活动");
                  Alarm2.show("更新后开启！");
               }
               else
               {
                  StatManager.sendStat2014("1011星光·帕诺杯计分板","点击【绿光擂台】按钮","2024运营活动");
                  Alarm2.show("更新后开启！");
               }
               break;
            case "guiZeBtn":
               StatManager.sendStat2014("1011星光·帕诺杯计分板","打开了大赛规则界面","2024运营活动");
               this.hide();
               ModuleManager.showAppModule("XingGuangPaNuoBeiS2Panel");
               break;
            case "rankBtn":
               StatManager.sendStat2014("1011星光·帕诺杯计分板","打开了应援排行界面","2024运营活动");
               this.hide();
               ModuleManager.showAppModule("XingGuangPaNuoBeiS3Panel");
         }
      }
      
      private function moviePlay(value:int) : void
      {
         LevelManager.closeAllMouseEvent();
         _ui["movie"].visible = true;
         _ui["movie"].gotoAndStop(value);
         AnimateManager.playMcAnimate(_ui["movie"]["mc"],"1","",function():void
         {
            _ui["movie"].visible = false;
            LevelManager.openMouseEvent();
            refresh();
         });
      }
      
      override public function hide() : void
      {
         super.hide();
      }
   }
}

