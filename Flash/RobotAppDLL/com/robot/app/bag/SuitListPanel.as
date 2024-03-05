package com.robot.app.bag
{
   import com.robot.core.config.xml.SuitXMLInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.uic.UIPageBar;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.system.ApplicationDomain;
   import flash.text.TextField;
   import org.taomee.events.DynamicEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class SuitListPanel extends Sprite
   {
      
      private static const MAX:int = 6;
       
      
      private var _dataList:Array;
      
      private var _listCon:Sprite;
      
      private var _proPageBar:UIPageBar;
      
      public function SuitListPanel(param1:ApplicationDomain, param2:Boolean = false)
      {
         var ui:Sprite;
         var dataLen:int;
         var len:int;
         var i:int;
         var id:uint = 0;
         var item:BagTypeListItem = null;
         var app:ApplicationDomain = param1;
         var isElite:Boolean = param2;
         super();
         ui = new (app.getDefinition("suitBg_ui") as Class)() as Sprite;
         ui.cacheAsBitmap = true;
         addChild(ui);
         this._listCon = new Sprite();
         this._listCon.x = 12;
         this._listCon.y = 36;
         addChild(this._listCon);
         if(isElite)
         {
            this._dataList = SuitXMLInfo.getIsEliteItems(ItemManager.getClothIDs());
         }
         else
         {
            this._dataList = SuitXMLInfo.getIDsForItems(ItemManager.getClothIDs());
         }
         if(BagPanel.currTab == BagTabType.NONO)
         {
            this._dataList = this._dataList.filter(function(param1:uint, param2:int, param3:Array):Boolean
            {
               if(SuitXMLInfo.getIsVip(param1))
               {
                  return true;
               }
               return false;
            });
         }
         else
         {
            this._dataList = this._dataList.filter(function(param1:uint, param2:int, param3:Array):Boolean
            {
               if(SuitXMLInfo.getIsVip(param1))
               {
                  return false;
               }
               return true;
            });
         }
         dataLen = int(this._dataList.length);
         len = Math.min(MAX,dataLen);
         i = 0;
         while(i < MAX)
         {
            id = uint(this._dataList[i]);
            item = new BagTypeListItem(app);
            item.width = 96;
            item.y = i * (item.height + 5);
            this._listCon.addChild(item);
            if(i < len)
            {
               item.setInfo(id,SuitXMLInfo.getName(id));
               item.addEventListener(MouseEvent.CLICK,this.onItemClick);
               if(BagShowType.currType == BagShowType.SUIT)
               {
                  if(item.id == BagShowType.currSuitID)
                  {
                     item.select = true;
                  }
               }
            }
            i++;
         }
         this._proPageBar = new UIPageBar(ui["prev"],ui["next"],new TextField(),MAX);
         this._proPageBar.totalLength = dataLen;
         this._proPageBar.addEventListener(MouseEvent.CLICK,this.onProPage);
      }
      
      public function destroy() : void
      {
         this._proPageBar.removeEventListener(MouseEvent.CLICK,this.onProPage);
         this._proPageBar.destroy();
         this._proPageBar = null;
         DisplayUtil.removeAllChild(this);
         this._dataList = null;
         this._listCon = null;
      }
      
      private function onItemClick(param1:MouseEvent) : void
      {
         var _loc2_:BagTypeListItem = param1.currentTarget as BagTypeListItem;
         dispatchEvent(new DynamicEvent(Event.SELECT,_loc2_.id));
      }
      
      private function onProPage(param1:DynamicEvent) : void
      {
         var _loc6_:BagTypeListItem = null;
         var _loc7_:uint = 0;
         var _loc8_:BagTypeListItem = null;
         var _loc2_:int = 0;
         while(_loc2_ < MAX)
         {
            (_loc6_ = this._listCon.getChildAt(_loc2_) as BagTypeListItem).clear();
            _loc2_++;
         }
         var _loc3_:uint = param1.paramObject as uint;
         var _loc4_:int = Math.min(MAX,this._proPageBar.totalLength - this._proPageBar.index * MAX);
         var _loc5_:int = 0;
         while(_loc5_ < _loc4_)
         {
            _loc7_ = uint(this._dataList[_loc5_ + _loc3_ * MAX]);
            (_loc8_ = this._listCon.getChildAt(_loc5_) as BagTypeListItem).setInfo(_loc7_,SuitXMLInfo.getName(_loc7_));
            if(BagShowType.currType == BagShowType.SUIT)
            {
               if(_loc8_.id == BagShowType.currSuitID)
               {
                  _loc8_.select = true;
               }
               else
               {
                  _loc8_.select = false;
               }
            }
            _loc5_++;
         }
      }
   }
}
