package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.PeakJihad2023Manger;
   import com.robot.core.config.xml.ExchangeActXmlInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class SairoUltramanOutputShopView
   {
      private var _mainUI:MovieClip;
      
      private var _updateFun:Function;
      
      private var _curBossIndex:int;
      
      private var _curPage:int = 0;
      
      private var _curArr:Array;
      
      private var _itemId:int;
      
      private var _itemNum:int;
      
      public function SairoUltramanOutputShopView(mc:MovieClip, updateFun:Function)
      {
         super();
         this._mainUI = mc;
         this._updateFun = updateFun;
         this._mainUI.addEventListener(MouseEvent.CLICK,this.onUIClick);
         this.update();
      }
      
      private static function fightOverHandler(e:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,fightOverHandler);
         ModuleManager.showAppModule("SairoUltramanOutputMainPanel",true);
      }
      
      public function show(index:int = 0) : void
      {
         this.update();
         this._mainUI.visible = true;
         StatManager.sendStat2014("1018赛罗奥特曼输出","打开奥特礼赠商店界面","2024运营活动");
      }
      
      public function hide() : void
      {
         this._mainUI.visible = false;
      }
      
      private function onUIClick(e:MouseEvent) : void
      {
         var index1:int = 0;
         var obj:Object = null;
         var btnName:String = e.target.name;
         var index:int = int(KTool.getIndex(e.target));
         switch(btnName)
         {
            case "close_shop":
               this.hide();
               break;
            case "check":
               index1 = int(KTool.getIndex(e.target.parent));
               this._curPage = index1;
               this.update();
               break;
            case "exchangeBtn":
               if(this._curPage == 0)
               {
                  if(this._itemNum >= 1250)
                  {
                     SocketConnection.sendByQueue(41900,[89,3],function():void
                     {
                        update();
                        if(_updateFun != null)
                        {
                           _updateFun();
                        }
                     });
                  }
                  else
                  {
                     Alarm2.show(ItemXMLInfo.getName(this._itemId) + "数量不足，无法兑换！");
                  }
               }
               else
               {
                  if(e.target.parent != null)
                  {
                     index1 = int(KTool.getIndex(e.target.parent));
                  }
                  obj = this._curPage == 0 ? this._curArr[0] : this._curArr[index1];
                  if(this._itemNum >= obj.price)
                  {
                     SocketConnection.sendByQueue(45823,[obj.id,1],function():void
                     {
                        update();
                        if(_updateFun != null)
                        {
                           _updateFun();
                        }
                     });
                  }
                  else
                  {
                     Alarm2.show(ItemXMLInfo.getName(this._itemId) + "数量不足，无法兑换！");
                  }
               }
               break;
            case "buyBtn":
               ModuleManager.showAppModule("MultiBuyPanel",{
                  "productID":261014,
                  "iconID":1726312,
                  "exchangeID":14409,
                  "callFunction":function(num:int = 0):void
                  {
                     update();
                     if(_updateFun != null)
                     {
                        _updateFun();
                     }
                  }
               });
         }
      }
      
      public function update() : void
      {
         var i:int;
         var forevers:Array = null;
         for(i = 0; i < 2; i++)
         {
            this._mainUI["btnMc_" + i].gotoAndStop(1);
         }
         this._mainUI["btnMc_" + this._curPage].gotoAndStop(2);
         this._mainUI.mc.gotoAndStop(this._curPage + 1);
         this._curArr = ExchangeActXmlInfo.getObjsByShopType(this._curPage + 1);
         forevers = ExchangeActXmlInfo.getForevers();
         forevers.push(124289);
         KTool.getMultiValue(forevers,function(valueArr:Array):void
         {
            var index:int = 0;
            var i:int = 0;
            var obj:Object = null;
            if(_curPage == 0)
            {
               _itemId = 1726312;
               _mainUI.mc.requireNumTx.text = String(1250);
               index = int(forevers.indexOf(124289));
               KTool.checkMultiPetClass([4679],function(va:Array):void
               {
                  if(va[0] > 0 || BitUtils.getBit(valueArr[index],0) > 0)
                  {
                     _mainUI.mc.flagMc.visible = true;
                     CommonUI.setEnabled(_mainUI.mc.exchangeBtn,false,true);
                  }
                  else
                  {
                     _mainUI.mc.flagMc.visible = false;
                     CommonUI.setEnabled(_mainUI.mc.exchangeBtn,true,false);
                  }
               });
            }
            else
            {
               for(i = 0; i < 6; i++)
               {
                  obj = _curArr[i] as Object;
                  if(obj.type == 1)
                  {
                     PeakJihad2023Manger.getItemIcon(obj.realid,_mainUI.mc["itemMc_" + i].icon,57);
                  }
                  _mainUI.mc["itemMc_" + i].nameTx.text = String(obj.name) + "*" + obj.num;
                  _mainUI.mc["itemMc_" + i].requireNumTx.text = String(obj.price);
                  index = int(forevers.indexOf(obj.UserInfoId));
                  if(obj.LimitCnt > 0)
                  {
                     _mainUI.mc["itemMc_" + i].limitMc.visible = true;
                     _mainUI.mc["itemMc_" + i].limitMc.curNumTx.text = String(valueArr[index]);
                     _mainUI.mc["itemMc_" + i].limitMc.maxNumTx.text = String(obj.LimitCnt);
                     if(valueArr[index] >= obj.LimitCnt)
                     {
                        _mainUI.mc["itemMc_" + i].flagMc.visible = true;
                        CommonUI.setEnabled(_mainUI.mc["itemMc_" + i].exchangeBtn,false,true);
                     }
                     else
                     {
                        _mainUI.mc["itemMc_" + i].flagMc.visible = false;
                        CommonUI.setEnabled(_mainUI.mc["itemMc_" + i].exchangeBtn,true,false);
                     }
                  }
                  else
                  {
                     _mainUI.mc["itemMc_" + i].flagMc.visible = false;
                     _mainUI.mc["itemMc_" + i].limitMc.visible = false;
                     CommonUI.setEnabled(_mainUI.mc["itemMc_" + i].exchangeBtn,true,false);
                  }
                  _itemId = obj.coinid;
               }
            }
            ItemManager.updateItems([_itemId],function():void
            {
               _itemNum = ItemManager.getNumByID(_itemId);
               _mainUI.mc.itemNumTx.text = String(_itemNum);
            });
         });
      }
      
      public function destroy() : void
      {
         this._mainUI.removeEventListener(MouseEvent.CLICK,this.onUIClick);
         this._mainUI = null;
      }
   }
}

