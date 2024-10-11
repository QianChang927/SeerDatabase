package com.robot.module.app
{
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.PetSkinXMLInfo;
   import com.robot.core.config.xml.SuitXMLInfo;
   import com.robot.core.config.xmlInfo.PetSkinInfo;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.itemTip.ItemInfoTip;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.text.TextField;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ElfBattle2024ShopPanel extends ActivityModel
   {
      private var items:Array;
      
      private var curTasks:Array;
      
      private var initd:Boolean;
      
      private var needItems:Array;
      
      private var itemNum:int;
      
      private var _selectIdx:int;
      
      public function ElfBattle2024ShopPanel()
      {
         super();
         resUrl = "2024/1011/ElfBattle2024ShopPanel";
         configUrl = "2024/1011/ElfBattle2024";
      }
      
      override public function show() : void
      {
         StatManager.sendStat2014("1011星光·帕诺杯精灵大乱斗","打开了乱斗商店","2024运营活动");
         super.show();
      }
      
      override protected function updatePanel() : void
      {
         this.itemNum = getValue("itemNum");
         _ui["num"].text = this.itemNum;
         this.selectIdx = this.selectIdx;
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var need:int = 0;
         var btnName:String = e.target.name;
         var index:int = int(btnName.split("_")[1]);
         var pindex:int = int(e.target.parent.name.split("_")[1]);
         switch(btnName)
         {
            case "close":
               this.hide();
               ModuleManager.showAppModule("ElfBattle2024MainPanel");
               break;
            case "page_" + index:
               this.selectIdx = index;
               break;
            case "reward_" + index:
               if(this.itemNum < this.needItems[index])
               {
                  doAction("alarm5");
                  return;
               }
               if(this.selectIdx == 1 && index > 2)
               {
                  if(this.getHaveSuit(index - 3))
                  {
                     SocketConnection.sendByQueue(41492,[3,1 + index],function(e:SocketEvent):void
                     {
                        refresh();
                     });
                  }
                  return;
               }
               SocketConnection.sendByQueue(41492,[this.selectIdx + 2,index + 1],function(e:SocketEvent):void
               {
                  refresh();
               });
               break;
         }
      }
      
      private function getBuyNumById(tmpidx:int) : int
      {
         if(this.selectIdx == 1)
         {
            return this.getHaveSuit(tmpidx) ? 1 : 0;
         }
         var idx:int = tmpidx / 4;
         var pos:int = tmpidx % 4;
         var foreverValue:int = int(getValue("exchange" + idx));
         return foreverValue >> pos * 8 & 0xFF;
      }
      
      private function showPage() : void
      {
         var str:String = null;
         var tmpscore:int = 0;
         var num:int = 0;
         var tmpMax:int = 0;
         this.needItems = [];
         for(var i:int = 0; i < this.curTasks.length; i++)
         {
            str = this.curTasks[i];
            tmpscore = parseInt(str.split("_")[this.selectIdx == 0 ? 3 : 1]);
            this.needItems.push(tmpscore);
            num = this.getBuyNumById(i);
            tmpMax = this.selectIdx == 0 ? int(parseInt(str.split("_")[2])) : 1;
            if(Boolean(_ui["mc"]["item_" + i]["txt"]))
            {
               _ui["mc"]["item_" + i]["txt"].text = num + "/" + tmpMax;
            }
            _ui["mc"]["item_" + i]["btnmc"].gotoAndStop(num < tmpMax ? 1 : 2);
            if(this.selectIdx == 1 && i > 2)
            {
               if(Boolean(_ui["mc"]["item_" + i]["btnmc"]["reward_" + i]))
               {
                  CommonUI.setEnabled(_ui["mc"]["item_" + i]["btnmc"]["reward_" + i],num < tmpMax && this.getHaveSuit(i - 3));
               }
            }
         }
      }
      
      private function getHaveSuit(idx:int) : Boolean
      {
         var sid:int = parseInt(this.curTasks[idx].split("_")[0]);
         var arr:Array = SuitXMLInfo.getCloths(sid);
         var boo:Boolean = true;
         for(var j:int = 0; j < arr.length; j++)
         {
            if(ItemManager.getNumByID(parseInt(arr[j])) == 0 && MainManager.actorInfo.clothIDs.indexOf(parseInt(arr[j])) == -1)
            {
               boo = false;
               break;
            }
         }
         return boo;
      }
      
      private function setBtnNum(btn:SimpleButton, num:int) : void
      {
         var overM:DisplayObjectContainer = btn.overState as DisplayObjectContainer;
         var upM:DisplayObjectContainer = btn.upState as DisplayObjectContainer;
         var downM:DisplayObjectContainer = btn.downState as DisplayObjectContainer;
         (overM.getChildByName("txt") as TextField).text = num + "";
         (upM.getChildByName("txt") as TextField).text = num + "";
         (downM.getChildByName("txt") as TextField).text = num + "";
      }
      
      private function loadItem(id:uint, container:DisplayObjectContainer, scale:int = 1, type:int = 1) : void
      {
         var str:String;
         var rSkinId:int = 0;
         var skinInfo:PetSkinInfo = null;
         DisplayUtil.removeAllChild(container as MovieClip);
         str = "";
         if(type == 1)
         {
            str = ItemXMLInfo.getIconURL(id);
         }
         else if(type == 2)
         {
            str = CountermarkXMLInfo.getIconURL(id);
         }
         else if(type == 6)
         {
            rSkinId = int(id);
            skinInfo = PetSkinXMLInfo.getSkinInfo(rSkinId);
            str = ClientConfig.getPetHeadPath(skinInfo.monId,0,skinInfo.id);
         }
         else if(type == 12)
         {
            str = ClientConfig.getClothSuitPath(id);
         }
         ResourceManager.getResource(str,function(dis:DisplayObject):void
         {
            if(_ui == null || container["cid"] != id)
            {
               return;
            }
            var mc:MovieClip = dis as MovieClip;
            if(type == 6)
            {
               ToolTipManager.add(mc,PetSkinXMLInfo.getSkinInfo(id).name);
               mc.scaleX = mc.scaleY = 0.5;
            }
            else if(type == 12)
            {
               ToolTipManager.add(mc,SuitXMLInfo.getName(id));
            }
            else
            {
               mc.addEventListener(MouseEvent.ROLL_OVER,overHandle);
               mc.addEventListener(MouseEvent.ROLL_OUT,outHandle);
            }
            if(items == null)
            {
               items = [];
            }
            items.push(mc);
            CommonUI.centerAlign(mc,new Sprite(),new Point(0,0));
            container.addChild(mc);
         },"item");
      }
      
      private function clearItem() : void
      {
         var j:int = 0;
         if(Boolean(this.items))
         {
            for(j = 0; j < this.items.length; j++)
            {
               ToolTipManager.remove(this.items[j]);
               this.items[j].removeEventListener(MouseEvent.ROLL_OVER,this.overHandle);
               this.items[j].removeEventListener(MouseEvent.ROLL_OUT,this.outHandle);
               if(Boolean(this.items[j].parent))
               {
                  this.items[j].parent.removeChild(this.items[j]);
               }
               this.items[j] = null;
            }
            this.items = null;
         }
      }
      
      private function outHandle(e:MouseEvent) : void
      {
         ItemInfoTip.hide();
      }
      
      private function overHandle(e:MouseEvent) : void
      {
         var id:int = int(e.currentTarget.parent.cid);
         var info:SingleItemInfo = new SingleItemInfo();
         info.itemID = id;
         ItemInfoTip.show(info);
      }
      
      override public function hide() : void
      {
         this.needItems = null;
         this.clearItem();
         this.curTasks = null;
         super.hide();
      }
      
      public function get selectIdx() : int
      {
         return this._selectIdx;
      }
      
      public function set selectIdx(value:int) : void
      {
         this._selectIdx = value;
         for(var j:int = 0; j < 2; j++)
         {
            _ui["btnmc_" + j].gotoAndStop(this.selectIdx == j ? 2 : 1);
         }
         _ui["title"].gotoAndStop(this.selectIdx + 1);
         _ui["mc"].gotoAndStop(this.selectIdx + 1);
         this.curTasks = getValue("rewards_" + this._selectIdx);
         this.showPage();
      }
   }
}

