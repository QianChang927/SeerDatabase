package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.mode.BaseModule;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class TrackRareSpiritsTravelShopPanel extends BaseModule
   {
      private var _mainUI:MovieClip;
      
      private var _surplusTime:int;
      
      private var _radndomindex:int;
      
      private var _arr:Array;
      
      private var _requireArr:Array;
      
      private var _itemidArr:Array;
      
      private var _itemMaxumArr:Array;
      
      private var _allnumMaxArr:Array;
      
      private var _curItemIdArr:Array;
      
      private var _itemNumArr:Array;
      
      public function TrackRareSpiritsTravelShopPanel()
      {
         this._requireArr = [20,1,1,5,1,10,20,1,10];
         this._itemidArr = [1400547,1717070,1717071,1717072,1717073,1717074,1400548,1717076,1717077];
         this._itemMaxumArr = [1,5,5,5,5,5,1,5,5];
         this._allnumMaxArr = [0,0,0,0,0,200,0,0,200];
         super();
         resUrl = "2018/0608/TrackRareSpiritsTravelShopPanel";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         sendCmd(43297,[11,2],function():void
         {
            _mainUI = _ui;
            update(superShow);
         });
      }
      
      private function superShow() : void
      {
         eventCom.addClickEvent(this._mainUI,this.onClick);
         for(var i:int = 0; i < 4; i++)
         {
         }
         super.show();
      }
      
      private function onGoBtnClick(event:MouseEvent) : void
      {
         var index:int = int(event.currentTarget.name.split("_")[1]);
         switch(index)
         {
            case 0:
               this.hide();
               ModuleManager.showModule(ClientConfig.getAppModule("XXXXXX"),"正在打开....");
         }
      }
      
      private function onClick(event:MouseEvent) : void
      {
         var index:int = 0;
         index = int(event.target.name.split("_")[1]);
         var index1:int = int(event.target.parent.name.split("_")[1]);
         switch(event.target.name)
         {
            case "closeBtn":
               this.hide();
               break;
            case "buyBtn_" + index:
               if(this._itemNumArr[index] >= this._itemMaxumArr[index])
               {
                  Alarm2.show("此道具的数量已经达到上限了！");
                  return;
               }
               if(MainManager.actorInfo.coins >= this._requireArr[this._arr[index] - 1] * 10000)
               {
                  Alert.show("需要消耗" + this._requireArr[this._arr[index] - 1] * 10000 + "赛尔豆，是否确认购买？",function():void
                  {
                     if(SystemTimerManager.sysBJDate.hours <= 14)
                     {
                        sendCmd(43297,[6,index + 1],function():void
                        {
                           update();
                        });
                     }
                     else
                     {
                        sendCmd(43297,[6,index + 1 + 3],function():void
                        {
                           update();
                        });
                     }
                  });
               }
               else
               {
                  Alarm2.show("赛尔豆不足！");
               }
               break;
         }
      }
      
      private function update(fun:Function = null) : void
      {
         var date:Date;
         this._mainUI.ceinTx.text = String(MainManager.actorInfo.coins);
         this._arr = new Array();
         KTool.socketSendCallBack(43297,function(e:SocketEvent):void
         {
            var byte:ByteArray = e.data as ByteArray;
            _radndomindex = byte.readUnsignedInt();
            KTool.getMultiValue([16821],function(va:Array):void
            {
               var i:int = 0;
               var num:uint = 0;
               if(SystemTimerManager.sysBJDate.hours <= 14)
               {
                  for(i = 0; i < 3; i++)
                  {
                     num = uint(KTool.subByte(_radndomindex,i * 4,4));
                     _arr.push(num);
                  }
               }
               else
               {
                  for(i = 0; i < 3; i++)
                  {
                     num = uint(KTool.subByte(_radndomindex,(i + 3) * 4,4));
                     _arr.push(num);
                  }
               }
               _curItemIdArr = new Array();
               for(i = 0; i < 3; i++)
               {
                  _mainUI["mc_" + i].gotoAndStop(_arr[i]);
                  _curItemIdArr.push(_itemidArr[_arr[i] - 1]);
               }
               ItemManager.updateItems(_curItemIdArr,function():void
               {
                  _itemNumArr = new Array();
                  for(var i:int = 0; i < _curItemIdArr.length; i++)
                  {
                     _itemNumArr[i] = ItemManager.getNumByID(_curItemIdArr[i]);
                  }
               });
               for(i = 0; i < 3; i++)
               {
                  if(SystemTimerManager.sysBJDate.hours <= 14)
                  {
                     if(BitUtils.getBit(va[0],i) > 0)
                     {
                        _mainUI["flag_" + i].visible = true;
                        CommonUI.setEnabled(_mainUI["buyBtn_" + i],false,true);
                     }
                     else
                     {
                        _mainUI["flag_" + i].visible = false;
                     }
                  }
                  else if(BitUtils.getBit(va[0],i + 3) > 0)
                  {
                     _mainUI["flag_" + i].visible = true;
                     CommonUI.setEnabled(_mainUI["buyBtn_" + i],false,true);
                  }
                  else
                  {
                     _mainUI["flag_" + i].visible = false;
                  }
               }
               KTool.getGlobalSubkeyValues(10013,[2,3],function(va:Array):void
               {
                  for(var i:int = 0; i < 3; i++)
                  {
                     if(_mainUI["mc_" + i].currentFrame == 6)
                     {
                        if(va[0] >= 200)
                        {
                           _mainUI["mc_" + i].numTx.text = "0/200";
                        }
                        else
                        {
                           _mainUI["mc_" + i].numTx.text = String(_allnumMaxArr[_mainUI["mc_" + i].currentFrame - 1] - va[0] + "/" + _allnumMaxArr[_mainUI["mc_" + i].currentFrame - 1]);
                        }
                     }
                     if(_mainUI["mc_" + i].currentFrame == 9)
                     {
                        if(va[1] >= 200)
                        {
                           _mainUI["mc_" + i].numTx.text = "0/200";
                        }
                        else
                        {
                           _mainUI["mc_" + i].numTx.text = String(_allnumMaxArr[_mainUI["mc_" + i].currentFrame - 1] - va[1] + "/" + _allnumMaxArr[_mainUI["mc_" + i].currentFrame - 1]);
                        }
                     }
                  }
               });
            });
         },[11,2]);
         SystemTimerManager.addTickFun(this.onTimer);
         date = new Date(SystemTimerManager.sysBJDate.fullYear,SystemTimerManager.sysBJDate.month,SystemTimerManager.sysBJDate.date,(SystemTimerManager.sysBJDate.hours <= 14 ? 12 : 17) + 2,0,0,0);
         trace(SystemTimerManager.time);
         this._surplusTime = date.time / 1000 - SystemTimerManager.time;
         if(fun != null)
         {
            fun();
         }
      }
      
      private function onTimer() : void
      {
         --this._surplusTime;
         if(this._surplusTime <= 0)
         {
            this.hide();
         }
         else
         {
            this.getTimeClockString(this._surplusTime);
         }
      }
      
      private function getTimeClockString(second:int) : void
      {
         this._mainUI.timeTx.text = SystemTimerManager.getTimeClockString(second,true);
      }
      
      override public function hide() : void
      {
         SystemTimerManager.removeTickFun(this.onTimer);
         super.hide();
      }
   }
}

