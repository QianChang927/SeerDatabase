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
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NpcDialog;
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
   
   public class ShangYeJieZhanZhengRewardPanel extends ActivityModel
   {
      private var score:int;
      
      private var items:Array;
      
      private var curTasks:Array;
      
      private var initd:Boolean;
      
      private var needScores:Array;
      
      private var canRewardLeft:Boolean;
      
      private var cf:int;
      
      public function ShangYeJieZhanZhengRewardPanel()
      {
         super();
         resUrl = "2024/0927/ShangYeJieZhanZhengRewardPanel";
         configUrl = "2024/0927/ShangYeJieZhanZheng";
      }
      
      override public function show() : void
      {
         super.show();
      }
      
      override protected function updatePanel() : void
      {
         var rewardLeft:Boolean = getValue("rewardLeft") == 1;
         this.score = getValue("scoreCf");
         this.cf = this.score & 0xFFFF;
         this.score = this.score >> 16 & 0xFFFF;
         _ui["score"].text = this.score;
         this.canRewardLeft = this.cf >= 1350;
         _ui["btnmc"].gotoAndStop(rewardLeft ? 2 : 1);
         this.curTasks = getValue("rewards");
         this.showPage();
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
               ModuleManager.showAppModule("ShangYeJieZhanZhengMainPanel");
               break;
            case "reward":
               if(!this.canRewardLeft)
               {
                  NpcDialog.show(5800,["你的财富还没有超越所有的商铺哦，快快努力吧，终极大奖等着你哟！"],["…"],null,false,null,true);
                  return;
               }
               SocketConnection.sendByQueue(41950,[56,0],function(e:SocketEvent):void
               {
                  refresh();
                  NpcDialog.show(5800,["恭喜你，已经是商业街的佼佼者了，成为商业巨鳄指日可待哟！"],["耶！"],null,false,null,true);
               });
               break;
            case "reward_" + index:
               if(this.score < this.needScores[index])
               {
                  doAction("alarm3");
                  return;
               }
               SocketConnection.sendByQueue(41950,[56,index + 1],function(e:SocketEvent):void
               {
                  refresh();
               });
               break;
         }
      }
      
      private function getBuyNumById(tmpidx:int) : int
      {
         var idx:int = tmpidx / 8;
         var pos:int = tmpidx % 8;
         var foreverValue:int = int(getValue("value" + idx));
         return foreverValue >> pos * 4 & 0x0F;
      }
      
      private function showPage() : void
      {
         var str:String = null;
         var tmpscore:int = 0;
         var num:int = 0;
         var tmpMax:int = 0;
         this.needScores = [];
         for(var i:int = 0; i < 10; i++)
         {
            if(i < this.curTasks.length)
            {
               str = this.curTasks[i];
               tmpscore = parseInt(str.split("_")[1]);
               this.needScores.push(tmpscore);
               num = this.getBuyNumById(i);
               tmpMax = parseInt(str.split("_")[0]);
               _ui["txt_" + i].text = num + "/" + tmpMax;
               this.setBtnNum(_ui["reward_" + i],tmpscore);
               CommonUI.setEnabled(_ui["reward_" + i],num < tmpMax);
            }
         }
      }
      
      private function setBtnNum(btn:SimpleButton, num:int) : void
      {
         var overM:DisplayObjectContainer = btn.overState as DisplayObjectContainer;
         var upM:DisplayObjectContainer = btn.upState as DisplayObjectContainer;
         var downM:DisplayObjectContainer = btn.downState as DisplayObjectContainer;
         (overM.getChildAt(overM.numChildren - 1) as TextField).text = num + "";
         (upM.getChildAt(upM.numChildren - 1) as TextField).text = num + "";
         (downM.getChildAt(downM.numChildren - 1) as TextField).text = num + "";
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
         this.needScores = null;
         this.clearItem();
         this.curTasks = null;
         super.hide();
      }
   }
}

