package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.MarkJackpotXmlInfo;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.ui.BlackBgTip;
   import com.robot.core.ui.itemTip.ItemInfoTip;
   import com.robot.core.utils.BitUtils;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MarkJackpotPermanentResultSPanel extends ActivityModel
   {
      private var _commdId:int;
      
      private var _itemNumArr:Array;
      
      private var _decompose1:int;
      
      public function MarkJackpotPermanentResultSPanel()
      {
         super();
         resUrl = "2021/0209/MarkJackpotPermanentResultSPanel";
         configUrl = "2021/0209/markJackpotConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
         for(var i:int = 0; i < 1; i++)
         {
            _mainUI.tipsMc.visible = false;
            eventCom.addRollOverEvent(_mainUI["decomposeBtn"],this.onRollOver0);
            eventCom.addRollOutEvent(_mainUI["decomposeBtn"],this.onRollOut0);
         }
      }
      
      private function onRollOver0(event:MouseEvent) : void
      {
         var index:int = int(KTool.getIndex(event.currentTarget.parent));
         _mainUI.tipsMc.visible = true;
      }
      
      private function onRollOut0(event:MouseEvent) : void
      {
         var index:int = int(KTool.getIndex(event.currentTarget.parent));
         _mainUI.tipsMc.visible = false;
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btnName:String = e.target.name;
         var index:int = int(KTool.getIndex(e.target));
         var index1:int = int(KTool.getIndex(e.target.parent));
         switch(btnName)
         {
            case "closeBtn":
               this.sureFun();
               break;
            case "decomposeBtn":
               sendCmd(this._commdId,[2,1],function():void
               {
                  refresh().then(function():void
                  {
                     sureFun();
                  });
               });
               break;
            case "sureBtn":
               this.sureFun();
         }
      }
      
      private function sureFun() : void
      {
         sendCmd(this._commdId,[2,12],function():void
         {
            hide();
            ModuleManager.showAppModule("MarkJackpotPermanentMainPanel");
         });
      }
      
      override protected function updatePanel() : void
      {
         var i:int = 0;
         var itemnum:int = 0;
         this._commdId = getValue("comId")[0];
         this._itemNumArr = new Array();
         for(i = 0; i < 2; i++)
         {
            itemnum = int(getValue("itemNum1_" + i));
            this._itemNumArr.push(itemnum);
            if(i == 1)
            {
               _mainUI["itemNumTx"].text = String(itemnum) + "";
            }
         }
         var decomposeGetArr:Array = getValue("decomposeGetArr");
         var markId:int = int(getValue("result1_" + 0));
         var object:Object = MarkJackpotXmlInfo.getMarksInfoById(markId);
         _mainUI["mc_" + 0].markNameTx.text = CountermarkXMLInfo.getDes(markId);
         _mainUI["mc_" + 0].bg.gotoAndStop(5 - object.lv + 1);
         _mainUI.tipsMc.tx.text = "获得" + String(decomposeGetArr[5 - object.lv]);
         this.getItemIcon(markId,_mainUI["mc_" + 0].icon);
         this._decompose1 = getValue("decompose1");
         for(i = 0; i < 1; i++)
         {
            if(BitUtils.getBit(this._decompose1,i) > 0)
            {
               _mainUI["mc_" + 0].flagMc.visible = true;
               CommonUI.setEnabled(_mainUI.decomposeBtn,false,true);
            }
            else
            {
               CommonUI.setEnabled(_mainUI.decomposeBtn,true,false);
               _mainUI["mc_" + 0].flagMc.visible = false;
            }
         }
         _mainUI["mc_" + 0].itemID = markId;
         eventCom.addRollOverEvent(_mainUI["mc_" + 0].icon,this.onOverHandler);
         eventCom.addRollOutEvent(_mainUI["mc_" + 0].icon,this.onOutHandler);
      }
      
      private function onOverHandler(event:MouseEvent) : void
      {
         var str:String = null;
         var extra:Array = null;
         var typearr:Array = null;
         var i:int = 0;
         var info:SingleItemInfo = null;
         var parentMc:MovieClip = event.target.parent as MovieClip;
         if(CountermarkXMLInfo.getType(parentMc.itemID) != -1)
         {
            str = "名称：<font color=\'#ffff00\'>" + CountermarkXMLInfo.getDes(parentMc.itemID) + "</font>" + "\r" + "效果：<font color=\'#ffff00\'>" + CountermarkXMLInfo.getEffectDes(parentMc.itemID) + "</font>";
            extra = CountermarkXMLInfo.getExtraAttriValue(parentMc.itemID);
            if(Boolean(extra))
            {
               str += "\r" + "隐藏属性：<font color=\'#ffff00\'>";
               typearr = ["攻击","防御","特攻","特防","速度","体力"];
               for(i = 0; i < 6; i++)
               {
                  if(extra[i] > 0)
                  {
                     str += "+" + extra[i] + typearr[i];
                  }
               }
               str += "</font>";
            }
            str += "\r" + "类型：<font color=\'#ffff00\'>" + CountermarkXMLInfo.getTypeName(parentMc.itemID) + "</font>" + "\r" + "限定：<font color=\'#ffff00\'>" + CountermarkXMLInfo.getRestrictDes(parentMc.itemID) + "</font>";
            BlackBgTip.show(str,null,null,150);
         }
         else
         {
            info = new SingleItemInfo();
            info.itemID = parentMc.itemID;
            ItemInfoTip.show(info,false,MainManager.getStage());
         }
      }
      
      private function onOutHandler(e:MouseEvent) : void
      {
         ItemInfoTip.hide();
         BlackBgTip.hide();
      }
      
      private function getItemIcon(iconID:uint, iconContainer:MovieClip) : void
      {
         var _url:String = null;
         DisplayUtil.removeAllChild(iconContainer);
         if(iconID < 10000)
         {
            _url = ClientConfig.getResPath("item/cloth/suitIcon/" + iconID + ".swf");
         }
         else if(iconID < 100000)
         {
            _url = ClientConfig.getResPath("countermark/icon/" + iconID + ".swf");
         }
         else
         {
            _url = ItemXMLInfo.getIconURL(iconID);
         }
         ResourceManager.getResource(_url,function(mc:DisplayObject):void
         {
            if(Boolean(mc))
            {
               if(iconID < 10000)
               {
                  mc.scaleX = 0.8;
                  mc.scaleY = 0.8;
                  mc.x = -112;
                  mc.y = -85;
               }
               else
               {
                  mc.scaleX = 1;
                  mc.scaleY = 1;
               }
               iconContainer.addChild(mc);
            }
         },"item");
      }
      
      override public function hide() : void
      {
         this._itemNumArr = null;
         super.hide();
      }
   }
}

