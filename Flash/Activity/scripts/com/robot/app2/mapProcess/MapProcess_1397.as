package com.robot.app2.mapProcess
{
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.ActivityTimeControl;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import flash.events.MouseEvent;
   
   public class MapProcess_1397 extends BaseMapProcess
   {
       
      
      private var _itemNumArr:Array;
      
      private var _daily:int;
      
      private var _arr:Array;
      
      private var _surplusTime:int;
      
      public function MapProcess_1397()
      {
         this._arr = [[19,45,95],[26,70,100],[17,47,84],[52,89,101],[20,61,83],[13,72,107],[22,37,66],[25,81,110]];
         super();
      }
      
      private static function onFightOver(param1:*) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
      }
      
      override protected function init() : void
      {
         topLevel.mouseEnabled = false;
         topLevel.mouseChildren = false;
         var _loc1_:int = 0;
         while(_loc1_ < 4)
         {
            _loc1_++;
         }
         this.btnLevel.addEventListener(MouseEvent.CLICK,this.onClick);
         this.update();
         SystemTimerManager.addTickFun(this.onTimer);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         var arr:Array = null;
         var evt:MouseEvent = param1;
         switch(evt.target.name)
         {
            case "closeBtn":
               MapManager.changeMap(1);
               break;
            case "stoneBtn":
               ModuleManager.showAppModule("SceneActivities20190912MainPanel");
               break;
            case "bagBtn":
               PetBagControllerNew.showByBuffer();
               break;
            case "jiuerBtn":
               StatManager.sendStat2014("0912场景活动","点击布克哆","2019运营活动");
               arr = [1720658,1720659,1720660];
               ItemManager.updateItems(arr,function():void
               {
                  var i:int;
                  _itemNumArr = new Array();
                  i = 0;
                  while(i < 3)
                  {
                     _itemNumArr[i] = ItemManager.getNumByID(arr[i]);
                     i++;
                  }
                  NpcDialog.show(3934,["你…你要干嘛？！我告诉你，我很厉害的！"],["..."],[function():void
                  {
                     NpcDialog.show(3934,["我猜你一定在找这个东西…"],["上大饼(消耗道具有几率进入战斗)","上炖菜(消耗道具有几率进入战斗)","上面条(消耗道具有几率进入战斗)","抱歉，打扰了。"],[function():void
                     {
                        _itemNumArr[0] = ItemManager.getNumByID(1720658);
                        if(_itemNumArr[0] > 0)
                        {
                           SocketConnection.sendByQueue(41267,[27,5],function(param1:*):void
                           {
                              var e:* = param1;
                              KTool.getBitSet([12009],function(param1:Array):void
                              {
                                 if(param1[0] > 0)
                                 {
                                    StatManager.sendStat2014("0912场景活动","与布克哆进入战斗","2019运营活动");
                                    SocketConnection.sendByQueue(2411,[0,0]);
                                 }
                                 else
                                 {
                                    StatManager.sendStat2014("0912场景活动","弹出“糟糕...”弹窗","2019运营活动");
                                    Alarm2.show("“糟糕…这不是我想要的…”这只布克哆一边说着，一边很不情愿地收下了你的食物…");
                                 }
                              });
                           });
                        }
                        else
                        {
                           Alarm2.show("请先获得该美食再来找布克哆！");
                        }
                     },function():void
                     {
                        if(_itemNumArr[1] > 0)
                        {
                           SocketConnection.sendByQueue(41267,[27,6],function(param1:*):void
                           {
                              var e:* = param1;
                              KTool.getBitSet([12009],function(param1:Array):void
                              {
                                 if(param1[0] > 0)
                                 {
                                    StatManager.sendStat2014("0912场景活动","与布克哆进入战斗","2019运营活动");
                                    SocketConnection.sendByQueue(2411,[0,0]);
                                 }
                                 else
                                 {
                                    StatManager.sendStat2014("0912场景活动","弹出“糟糕...”弹窗","2019运营活动");
                                    Alarm2.show("“糟糕…这不是我想要的…”这只布克哆一边说着，一边很不情愿地收下了你的食物…");
                                 }
                              });
                           });
                        }
                        else
                        {
                           Alarm2.show("请先获得该美食再来找布克哆！");
                        }
                     },function():void
                     {
                        if(_itemNumArr[2] > 0)
                        {
                           SocketConnection.sendByQueue(41267,[27,7],function(param1:*):void
                           {
                              var e:* = param1;
                              KTool.getBitSet([12009],function(param1:Array):void
                              {
                                 if(param1[0] > 0)
                                 {
                                    StatManager.sendStat2014("0912场景活动","与布克哆进入战斗","2019运营活动");
                                    SocketConnection.sendByQueue(2411,[0,0]);
                                 }
                                 else
                                 {
                                    StatManager.sendStat2014("0912场景活动","弹出“糟糕...”弹窗","2019运营活动");
                                    Alarm2.show("“糟糕…这不是我想要的…”这只布克哆一边说着，一边很不情愿地收下了你的食物…");
                                 }
                              });
                           });
                        }
                        else
                        {
                           Alarm2.show("请先获得该美食再来找布克哆！");
                        }
                     },null],false,null,true);
                  }],false,null,true);
               });
         }
      }
      
      private function update() : void
      {
         var arr:Array = null;
         arr = [1720658,1720659,1720660];
         ItemManager.updateItems(arr,function():void
         {
            _itemNumArr = new Array();
            var _loc1_:int = 0;
            while(_loc1_ < 3)
            {
               _itemNumArr[_loc1_] = ItemManager.getNumByID(arr[_loc1_]);
               _loc1_++;
            }
         });
         btnLevel["jiuerBtn"].visible = false;
      }
      
      private function onTimer() : void
      {
         var _loc7_:int = 0;
         var _loc8_:int = 0;
         this._daily = ActivityTimeControl.getNumberDay(181);
         var _loc1_:int = this._daily % 8 == 0 ? 8 : int(this._daily % 8);
         var _loc2_:Array = this._arr[_loc1_ - 1];
         var _loc3_:int = int(SystemTimerManager.getTimeByDate(2019,9,this._daily + 11,19,0,0));
         var _loc4_:int;
         if((_loc4_ = SystemTimerManager.time - _loc3_) < 0)
         {
            btnLevel["jiuerBtn"].visible = false;
            return;
         }
         var _loc5_:int = -1;
         var _loc6_:int = 0;
         while(_loc6_ < 3)
         {
            if(int(_loc4_ / 60) >= _loc2_[_loc6_] && int(_loc4_ / 60) < _loc2_[_loc6_] + 3)
            {
               _loc5_ = _loc6_;
               break;
            }
            _loc6_++;
         }
         if(_loc5_ >= 0)
         {
            _loc7_ = _loc3_ + _loc2_[_loc5_] * 60;
            _loc8_ = SystemTimerManager.time - _loc7_;
            this._surplusTime = 3 * 60 - _loc8_;
            if(this._surplusTime > 0)
            {
               btnLevel["jiuerBtn"].visible = true;
            }
            else
            {
               btnLevel["jiuerBtn"].visible = false;
            }
         }
         else
         {
            btnLevel["jiuerBtn"].visible = false;
         }
         --this._surplusTime;
      }
      
      private function getTimeClockString(param1:int) : void
      {
      }
      
      override public function destroy() : void
      {
         this.btnLevel.removeEventListener(MouseEvent.CLICK,this.onClick);
         SystemTimerManager.removeTickFun(this.onTimer);
         super.destroy();
      }
   }
}
