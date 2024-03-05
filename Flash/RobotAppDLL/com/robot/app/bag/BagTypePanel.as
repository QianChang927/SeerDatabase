package com.robot.app.bag
{
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.system.ApplicationDomain;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.events.DynamicEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class BagTypePanel extends Sprite
   {
       
      
      private var _currTab:uint = 1;
      
      private var _app:ApplicationDomain;
      
      private var _bagPanel:com.robot.app.bag.BagPanel;
      
      private var _listCon:Sprite;
      
      private var _selectItem:com.robot.app.bag.BagTypeListItem;
      
      private var _suitPanel:com.robot.app.bag.SuitListPanel;
      
      private var _esuitPanel:com.robot.app.bag.SuitListPanel;
      
      private var _outTime:uint;
      
      public function BagTypePanel(param1:uint, param2:ApplicationDomain, param3:com.robot.app.bag.BagPanel)
      {
         var _loc5_:int = 0;
         var _loc6_:int = 0;
         var _loc7_:int = 0;
         var _loc8_:com.robot.app.bag.BagTypeListItem = null;
         var _loc9_:int = 0;
         var _loc10_:com.robot.app.bag.BagTypeListItem = null;
         super();
         this._currTab = param1;
         this._app = param2;
         this._bagPanel = param3;
         var _loc4_:Sprite;
         (_loc4_ = new (param2.getDefinition("typeBg_ui") as Class)() as Sprite).width = 100;
         _loc4_.cacheAsBitmap = true;
         addChild(_loc4_);
         this._listCon = new Sprite();
         this._listCon.x = 9;
         this._listCon.y = 15;
         addChild(this._listCon);
         switch(param1)
         {
            case BagTabType.CLOTH:
            case BagTabType.NONO:
               _loc5_ = int(BagShowType.typeNameList.length);
               _loc7_ = 0;
               while(_loc7_ < _loc5_)
               {
                  (_loc8_ = new com.robot.app.bag.BagTypeListItem(this._app)).y = _loc7_ * (_loc8_.height + 5);
                  _loc8_.setInfo(_loc7_,BagShowType.typeNameList[_loc7_]);
                  _loc8_.addEventListener(MouseEvent.CLICK,this.onItemClick);
                  _loc8_.addEventListener(MouseEvent.ROLL_OVER,this.onItemOver);
                  _loc8_.addEventListener(MouseEvent.ROLL_OUT,this.onItemOut);
                  this._listCon.addChild(_loc8_);
                  _loc7_++;
               }
               break;
            case BagTabType.COLLECTION:
               _loc6_ = int(BagCollectType.typeNameList.length);
               _loc9_ = 0;
               while(_loc9_ < _loc6_)
               {
                  (_loc10_ = new com.robot.app.bag.BagTypeListItem(this._app)).y = _loc9_ * (_loc10_.height + 5);
                  _loc10_.setInfo(_loc9_,BagCollectType.typeNameList[_loc9_]);
                  _loc10_.addEventListener(MouseEvent.CLICK,this.onItemClick);
                  this._listCon.addChild(_loc10_);
                  _loc9_++;
               }
         }
         this._selectItem = this._listCon.getChildAt(BagShowType.currType) as com.robot.app.bag.BagTypeListItem;
         this._selectItem.select = true;
         _loc4_.height = this._listCon.height + 40;
      }
      
      public function setSelect(param1:int) : void
      {
         this._selectItem.select = false;
         this._selectItem = this._listCon.getChildAt(param1) as com.robot.app.bag.BagTypeListItem;
         this._selectItem.select = true;
      }
      
      private function onItemOver(param1:MouseEvent) : void
      {
         var _loc2_:com.robot.app.bag.BagTypeListItem = param1.currentTarget as com.robot.app.bag.BagTypeListItem;
         if(_loc2_.id == BagShowType.SUIT)
         {
            if(this._suitPanel == null)
            {
               this._suitPanel = new com.robot.app.bag.SuitListPanel(this._app);
               this._suitPanel.addEventListener(Event.SELECT,this.onSuitSelect);
               this._suitPanel.addEventListener(MouseEvent.ROLL_OVER,this.onSuitOver);
               this._suitPanel.addEventListener(MouseEvent.ROLL_OUT,this.onSuitOut);
               this._suitPanel.x = _loc2_.x + _loc2_.width + 24;
            }
            addChild(this._suitPanel);
            clearTimeout(this._outTime);
         }
         else if(_loc2_.id == BagShowType.ELITE_SUIT)
         {
            if(this._esuitPanel == null)
            {
               this._esuitPanel = new com.robot.app.bag.SuitListPanel(this._app,true);
               this._esuitPanel.addEventListener(Event.SELECT,this.onSuitSelect);
               this._esuitPanel.addEventListener(MouseEvent.ROLL_OVER,this.onSuitOver);
               this._esuitPanel.addEventListener(MouseEvent.ROLL_OUT,this.onSuitOut);
               this._esuitPanel.x = _loc2_.x + _loc2_.width + 24;
            }
            addChild(this._esuitPanel);
            clearTimeout(this._outTime);
         }
      }
      
      private function onItemOut(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var item:com.robot.app.bag.BagTypeListItem = e.currentTarget as com.robot.app.bag.BagTypeListItem;
         if(item.id == BagShowType.SUIT)
         {
            if(this._suitPanel)
            {
               clearTimeout(this._outTime);
               this._outTime = setTimeout(function():void
               {
                  suitDestory();
               },500);
            }
         }
         if(item.id == BagShowType.ELITE_SUIT)
         {
            if(this._esuitPanel)
            {
               clearTimeout(this._outTime);
               this._outTime = setTimeout(function():void
               {
                  suitDestory();
               },500);
            }
         }
      }
      
      private function onItemClick(param1:MouseEvent) : void
      {
         var _loc2_:com.robot.app.bag.BagTypeListItem = param1.currentTarget as com.robot.app.bag.BagTypeListItem;
         switch(this._currTab)
         {
            case BagTabType.CLOTH:
            case BagTabType.NONO:
               if(_loc2_.id != BagShowType.SUIT)
               {
                  dispatchEvent(new BagTypeEvent(BagTypeEvent.SELECT,_loc2_.id));
               }
               break;
            case BagTabType.COLLECTION:
               dispatchEvent(new BagCollectTypeEvent(BagCollectTypeEvent.SELECT,_loc2_.id));
         }
      }
      
      private function onSuitSelect(param1:DynamicEvent) : void
      {
         dispatchEvent(new BagTypeEvent(BagTypeEvent.SELECT,BagShowType.SUIT,param1.paramObject as uint));
      }
      
      private function onSuitOver(param1:MouseEvent) : void
      {
         clearTimeout(this._outTime);
      }
      
      private function onSuitOut(param1:MouseEvent) : void
      {
         this.suitDestory();
      }
      
      private function suitDestory() : void
      {
         if(this._suitPanel)
         {
            this._suitPanel.removeEventListener(Event.SELECT,this.onSuitSelect);
            this._suitPanel.removeEventListener(MouseEvent.ROLL_OVER,this.onSuitOver);
            this._suitPanel.removeEventListener(MouseEvent.ROLL_OUT,this.onSuitOut);
            this._suitPanel.destroy();
            DisplayUtil.removeForParent(this._suitPanel);
            this._suitPanel = null;
         }
         if(this._esuitPanel)
         {
            this._esuitPanel.removeEventListener(Event.SELECT,this.onSuitSelect);
            this._esuitPanel.removeEventListener(MouseEvent.ROLL_OVER,this.onSuitOver);
            this._esuitPanel.removeEventListener(MouseEvent.ROLL_OUT,this.onSuitOut);
            this._esuitPanel.destroy();
            DisplayUtil.removeForParent(this._esuitPanel);
            this._esuitPanel = null;
         }
      }
      
      public function destory() : void
      {
         var _loc1_:com.robot.app.bag.BagTypeListItem = null;
         this.suitDestory();
         for each(_loc1_ in this._listCon)
         {
            _loc1_.removeEventListener(MouseEvent.CLICK,this.onItemClick);
            _loc1_.removeEventListener(MouseEvent.ROLL_OVER,this.onItemOver);
            _loc1_.removeEventListener(MouseEvent.ROLL_OUT,this.onItemOut);
            _loc1_.destroy();
         }
         this._app = null;
         this._bagPanel = null;
         this._listCon = null;
         this._selectItem = null;
      }
   }
}
