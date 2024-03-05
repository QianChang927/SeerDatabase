package com.robot.app.task.petstory.app.ship
{
   import com.robot.app.buyItem.BuyMoneyItemManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.TextFormatUtil;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.system.ApplicationDomain;
   import flash.text.TextField;
   import flash.utils.ByteArray;
   import org.taomee.effect.ColorFilter;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class StovePanel
   {
       
      
      private const PATH:String = "resource/module/ext/app/stove.swf";
      
      private var _closeBtn:SimpleButton;
      
      private var _app:ApplicationDomain;
      
      private var _mainUI:MovieClip;
      
      private var _loader:MCLoader;
      
      private var _itemList:Array;
      
      private var _goodNumList:Array;
      
      private var _spGoodNumList:Array;
      
      private var _txtList:Array;
      
      private var _buyBtn:SimpleButton;
      
      private var _stoveMC:MovieClip;
      
      private var _fusionBtn:SimpleButton;
      
      private var _heroGoodsNum:Array;
      
      private var _isSpecial:Boolean = false;
      
      private var _shineList:Array;
      
      private var _expressionList:Array;
      
      private var _collectionList:Array;
      
      private var _cutNum:uint;
      
      public function StovePanel()
      {
         this._itemList = [];
         this._goodNumList = [87,88,89,90,91,92,93];
         this._spGoodNumList = [94,95,96,97,98,99,100];
         this._txtList = [];
         this._heroGoodsNum = [];
         this._shineList = [];
         this._expressionList = [["1|15","2|2"],["1|25","3|5"],["1|20","7|1"],["6|2","7|2"],["6|2","7|1"],["0|5","6|2","4|10"],["0|5","6|2","5|15"]];
         this._collectionList = [400084,400083,400746,400747,400748,400749,400750,400085,400801];
         super();
         this.loadPanel();
      }
      
      private function loadPanel() : void
      {
         if(!this._app)
         {
            this._loader = new MCLoader(this.PATH,LevelManager.appLevel,1,"正在加载熔炼炉");
            this._loader.addEventListener(MCLoadEvent.SUCCESS,this.onComplete);
            this._loader.doLoad();
         }
      }
      
      private function onComplete(param1:MCLoadEvent) : void
      {
         this._app = param1.getApplicationDomain();
         this._loader.removeEventListener(MCLoadEvent.SUCCESS,this.onComplete);
         this._mainUI = new (this._app.getDefinition("StoveUI") as Class)() as MovieClip;
         this._closeBtn = this._mainUI["closeBtn"];
         this._closeBtn.addEventListener(MouseEvent.CLICK,this.onCloseBtn);
         this.show();
      }
      
      private function show() : void
      {
         DisplayUtil.align(this._mainUI,null,AlignType.MIDDLE_CENTER);
         LevelManager.appLevel.addChild(this._mainUI);
         LevelManager.closeMouseEvent();
         this.initMC();
      }
      
      private function initMC() : void
      {
         var _loc1_:uint = 0;
         while(_loc1_ <= 6)
         {
            (this._mainUI["item_" + _loc1_] as SimpleButton).addEventListener(MouseEvent.CLICK,this.onMouseItem);
            this._itemList.push(this._mainUI["item_" + _loc1_]);
            (this._mainUI["s_" + _loc1_] as MovieClip).visible = false;
            this._shineList.push(this._mainUI["s_" + _loc1_]);
            _loc1_++;
         }
         _loc1_ = 0;
         while(_loc1_ <= 8)
         {
            (this._mainUI["txt_" + _loc1_] as TextField).selectable = false;
            this._txtList.push(this._mainUI["txt_" + _loc1_]);
            _loc1_++;
         }
         this._buyBtn = this._mainUI["buyBtn"];
         this._buyBtn.addEventListener(MouseEvent.CLICK,this.onMosueBuy);
         this._fusionBtn = this._mainUI["fusionBtn"];
         this._fusionBtn.mouseEnabled = false;
         this._fusionBtn.filters = [ColorFilter.setGrayscale()];
         this._fusionBtn.addEventListener(MouseEvent.CLICK,this.onMouseFusion);
         this._stoveMC = this._mainUI["stoveMC"];
         this.getItemCnt();
      }
      
      private function getItemCnt() : void
      {
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,this.onGetColItemList);
         ItemManager.getCollection();
      }
      
      private function onGetColItemList(param1:ItemEvent) : void
      {
         var _loc2_:SingleItemInfo = null;
         ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,this.onGetColItemList);
         this._heroGoodsNum.splice(0);
         var _loc3_:uint = 0;
         while(_loc3_ < this._collectionList.length)
         {
            _loc2_ = ItemManager.getCollectionInfo(this._collectionList[_loc3_]);
            if(_loc2_)
            {
               this._heroGoodsNum.push(_loc2_.itemNum);
               (this._txtList[_loc3_] as TextField).text = _loc2_.itemNum.toString();
            }
            else
            {
               this._heroGoodsNum.push(0);
               (this._txtList[_loc3_] as TextField).text = "0";
            }
            _loc3_++;
         }
      }
      
      private function onMosueBuy(param1:MouseEvent) : void
      {
         BuyMoneyItemManager.buyItem(200249,this.getItemCnt,false,false);
      }
      
      private function onMouseFusion(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         KTool.getFrameMc(this._stoveMC,2,"",function(param1:DisplayObject):void
         {
            var o:DisplayObject = param1;
            var mc:MovieClip = o as MovieClip;
            AnimateManager.playMcAnimate(mc,1,"",function():void
            {
               if(_isSpecial)
               {
                  Alert.show("是否使用万能熔炼泥进行兑换？",function():void
                  {
                     SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,_spGoodNumList[_cutNum]);
                     SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,clostCompLeteHandler);
                  },function():void
                  {
                     _isSpecial = false;
                     var _loc1_:Array = _expressionList[_cutNum];
                     if(parseExpression(_loc1_))
                     {
                        SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,_goodNumList[_cutNum]);
                        SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,clostCompLeteHandler);
                     }
                     else
                     {
                        Alarm.show("材料数量不够,赶快收集吧!");
                     }
                  });
               }
               else
               {
                  SocketConnection.send(CommandID.EXCHANGE_CLOTH_COMPLETE,_goodNumList[_cutNum]);
                  SocketConnection.addCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,clostCompLeteHandler);
               }
               _fusionBtn.mouseEnabled = false;
               _fusionBtn.filters = [ColorFilter.setGrayscale()];
            });
         });
      }
      
      private function clostCompLeteHandler(param1:SocketEvent) : void
      {
         var _loc5_:uint = 0;
         var _loc6_:uint = 0;
         this.getItemCnt();
         SocketConnection.removeCmdListener(CommandID.EXCHANGE_CLOTH_COMPLETE,this.clostCompLeteHandler);
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         MainManager.actorInfo.fightBadge = _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         _loc2_.readUnsignedInt();
         var _loc3_:uint = _loc2_.readUnsignedInt();
         var _loc4_:int = 0;
         while(_loc4_ < _loc3_)
         {
            _loc5_ = _loc2_.readUnsignedInt();
            _loc6_ = _loc2_.readUnsignedInt();
            ItemInBagAlert.show(_loc5_,_loc6_ + "个" + TextFormatUtil.getRedTxt(ItemXMLInfo.getName(_loc5_)) + "已经放入你的背包。");
            _loc4_++;
         }
      }
      
      private function onMouseItem(param1:MouseEvent) : void
      {
         var _loc2_:uint = uint((param1.currentTarget as SimpleButton).name.slice(5));
         this.onFocus(_loc2_);
         this._cutNum = _loc2_;
         if(uint(this._heroGoodsNum[8]) > 0)
         {
            this._isSpecial = true;
            this._fusionBtn.mouseEnabled = true;
            this._fusionBtn.filters = [];
            return;
         }
         var _loc3_:Array = this._expressionList[_loc2_];
         if(this.parseExpression(_loc3_))
         {
            this._fusionBtn.mouseEnabled = true;
            this._fusionBtn.filters = [];
         }
         else
         {
            this._fusionBtn.mouseEnabled = false;
            this._fusionBtn.filters = [ColorFilter.setGrayscale()];
         }
      }
      
      private function onFocus(param1:uint) : void
      {
         var _loc2_:uint = 0;
         while(_loc2_ < this._shineList.length)
         {
            if(_loc2_ == param1)
            {
               (this._shineList[_loc2_] as MovieClip).visible = true;
            }
            else
            {
               (this._shineList[_loc2_] as MovieClip).visible = false;
            }
            _loc2_++;
         }
      }
      
      private function parseExpression(param1:Array) : Boolean
      {
         var _loc3_:uint = 0;
         var _loc4_:String = null;
         var _loc5_:Array = null;
         var _loc2_:Boolean = true;
         while(_loc3_ < param1.length)
         {
            _loc5_ = (_loc4_ = String(param1[_loc3_])).split("|");
            if(uint(this._heroGoodsNum[_loc5_[0]]) < uint(_loc5_[1]))
            {
               _loc2_ = false;
               break;
            }
            _loc3_++;
         }
         return _loc2_;
      }
      
      private function onCloseBtn(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(this._mainUI,false);
         LevelManager.openMouseEvent();
         this.destory();
      }
      
      private function destory() : void
      {
         this._closeBtn.removeEventListener(MouseEvent.CLICK,this.onCloseBtn);
         this._closeBtn = null;
         var _loc1_:uint = 0;
         while(_loc1_ <= 6)
         {
            (this._mainUI["item_" + _loc1_] as SimpleButton).removeEventListener(MouseEvent.CLICK,this.onMouseItem);
            _loc1_++;
         }
         this._fusionBtn.removeEventListener(MouseEvent.CLICK,this.onMouseFusion);
         this._fusionBtn = null;
         this._app = null;
         this._loader = null;
         this._mainUI = null;
         this._collectionList = null;
         this._expressionList = null;
         this._heroGoodsNum = null;
         this._txtList = null;
         this._goodNumList = null;
         this._spGoodNumList = null;
         this._itemList = null;
         this._shineList = null;
      }
   }
}
