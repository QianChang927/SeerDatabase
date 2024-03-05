package com.robot.core.ui.itemTip
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.config.xml.GemsXMLInfo;
   import com.robot.core.config.xml.ItemSeXMLInfo;
   import com.robot.core.config.xml.ItemTipXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.config.xml.SuitXMLInfo;
   import com.robot.core.info.clothInfo.PeopleItemInfo;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.utils.ItemType;
   import flash.display.DisplayObjectContainer;
   import flash.events.Event;
   import flash.text.TextFieldAutoSize;
   import org.taomee.component.UIComponent;
   import org.taomee.component.bgFill.SoildFillStyle;
   import org.taomee.component.containers.Canvas;
   import org.taomee.component.containers.HBox;
   import org.taomee.component.containers.VBox;
   import org.taomee.component.control.MLabel;
   import org.taomee.component.control.MLoadPane;
   import org.taomee.component.control.MText;
   import org.taomee.component.layout.CenterLayout;
   import org.taomee.component.layout.FitSizeLayout;
   import org.taomee.component.layout.FlowLayout;
   import org.taomee.utils.DisplayUtil;
   
   public class ItemInfoTip
   {
      
      private static var tipMC:Canvas;
      
      private static var box:HBox;
      
      private static var txtBox:VBox;
      
      private static var iconPanel:MLoadPane;
      
      private static var suitDesBox:VBox;
      
      private static var finalBox:VBox;
      
      private static var _info:SingleItemInfo;
      
      private static var lastSuitId:int = 0;
      
      private static var curPlayerClothes:Array;
       
      
      public function ItemInfoTip()
      {
         super();
      }
      
      public static function show(param1:SingleItemInfo, param2:Boolean = false, param3:DisplayObjectContainer = null) : void
      {
         var _loc8_:String = null;
         var _loc9_:UIComponent = null;
         var _loc10_:UIComponent = null;
         _info = param1;
         if(!tipMC)
         {
            tipMC = new Canvas();
            tipMC.layout = new CenterLayout();
            tipMC.bgFillStyle = new SoildFillStyle(0,0.8,20,20);
            box = new HBox();
            box.valign = FlowLayout.TOP;
            iconPanel = new MLoadPane(null,MLoadPane.FIT_HEIGHT);
            iconPanel.setSizeWH(80,80);
            txtBox = new VBox();
            finalBox = new VBox(10);
            suitDesBox = new VBox();
            finalBox.cacheAsBitmap = true;
            tipMC.cacheAsBitmap = true;
         }
         txtBox.removeAll();
         if(param1.type == ItemType.SUIT)
         {
            iconPanel.setIcon(ClientConfig.getResPath("item/cloth/suitIcon/" + param1.itemID + ".swf"));
         }
         else if(param1.type == ItemType.FITMENT)
         {
            iconPanel.setIcon(ClientConfig.getResPath("fitment/icon/" + param1.itemID + ".swf"));
         }
         else
         {
            _loc8_ = "";
            if(CountermarkXMLInfo.isminMark(param1.itemID))
            {
               _loc8_ = CountermarkXMLInfo.getIconURL(param1.itemID);
               iconPanel.setIcon(_loc8_);
            }
            else if(param1.type == ItemType.PET_ITEM)
            {
               _loc8_ = ClientConfig.getResPath("item/pet/" + param1.itemID + ".swf");
               iconPanel.setIcon(_loc8_);
            }
            else
            {
               iconPanel.setIcon(ItemXMLInfo.getIconURL(param1.itemID,param1.itemLevel));
            }
         }
         var _loc4_:UIComponent = getTitleBox();
         var _loc5_:UIComponent = getPetBox();
         var _loc6_:UIComponent = getTeamPKBox();
         var _loc7_:UIComponent = getDesBox();
         txtBox.appendAll(_loc4_,_loc5_,_loc6_,_loc7_);
         txtBox.setSizeWH(180,_loc4_.height + _loc5_.height + _loc6_.height + _loc7_.height + 3 * box.gap);
         box.appendAll(iconPanel,txtBox);
         box.setSizeWH(180 + 80 + box.gap,Math.max(txtBox.height,iconPanel.height));
         if(!(checkClothSame() && lastSuitId != 0 && lastSuitId == ItemSeXMLInfo.getSuitId(_info.itemID)))
         {
            suitDesBox.removeAll();
            _loc9_ = getClothDesBox();
            _loc10_ = getSuitDesBox();
            suitDesBox.appendAll(_loc9_,_loc10_);
            suitDesBox.setSizeWH(Math.max(_loc9_.width,_loc10_.width),_loc9_.height + _loc10_.height);
         }
         finalBox.appendAll(box,suitDesBox);
         finalBox.setSizeWH(box.width,box.height + suitDesBox.height);
         tipMC.setSizeWH(finalBox.width + 20,finalBox.height + 20);
         tipMC.append(finalBox);
         tipMC.visible = false;
         setPos();
         if(param3)
         {
            param3.addChild(tipMC);
         }
         else
         {
            LevelManager.appLevel.addChild(tipMC);
         }
         tipMC.addEventListener(Event.ENTER_FRAME,enterFrameHandler);
      }
      
      public static function hide() : void
      {
         if(tipMC)
         {
            tipMC.removeEventListener(Event.ENTER_FRAME,enterFrameHandler);
            DisplayUtil.removeForParent(tipMC);
         }
      }
      
      private static function enterFrameHandler(param1:Event) : void
      {
         setPos();
      }
      
      private static function setPos() : void
      {
         if(MainManager.getStage().mouseX + tipMC.width + 20 >= MainManager.getStageWidth())
         {
            tipMC.x = MainManager.getStage().mouseX - tipMC.width - 10;
         }
         else
         {
            tipMC.x = MainManager.getStage().mouseX + 10;
         }
         if(MainManager.getStage().mouseY + tipMC.height + 20 >= MainManager.getStageHeight())
         {
            tipMC.y = MainManager.getStageHeight() - tipMC.height - 10;
         }
         else
         {
            tipMC.y = MainManager.getStage().mouseY + 20;
         }
         tipMC.visible = true;
      }
      
      private static function getTitleBox() : HBox
      {
         var _loc3_:String = null;
         var _loc1_:HBox = new HBox();
         var _loc2_:MLabel = new MLabel();
         _loc2_.fontSize = 14;
         if(_info.type == ItemType.SUIT)
         {
            _loc3_ = SuitXMLInfo.getName(_info.itemID);
         }
         else if(_info.itemID < 100000 && _info.itemID != 1 && _info.itemID != 3 && _info.itemID != 9 && _info.itemID != 5 && _info.itemID != 11)
         {
            _loc3_ = CountermarkXMLInfo.getDes(_info.itemID);
         }
         else
         {
            _loc3_ = ItemXMLInfo.getName(_info.itemID);
         }
         var _loc4_:String = ItemTipXMLInfo.getItemColor(_info.itemID);
         _loc2_.htmlText = "<font color=\'" + _loc4_ + "\'>" + _loc3_ + "</font>";
         _loc2_.width = 180;
         _loc2_.blod = true;
         _loc1_.setSizeWH(180,_loc2_.height);
         _loc1_.append(_loc2_);
         return _loc1_;
      }
      
      private static function getPetBox() : Canvas
      {
         var _loc1_:String = ItemTipXMLInfo.getPetDes(_info.itemID,_info.itemLevel);
         var _loc2_:Canvas = new Canvas();
         _loc2_.layout = new FitSizeLayout();
         return _loc2_;
      }
      
      private static function getTeamPKBox() : Canvas
      {
         var _loc3_:MText = null;
         var _loc1_:String = ItemTipXMLInfo.getTeamPKDes(_info.itemID,_info.itemLevel);
         var _loc2_:Canvas = new Canvas();
         _loc2_.cacheAsBitmap = true;
         _loc2_.layout = new FitSizeLayout();
         if(!ItemSeXMLInfo.hasEffect(_info.itemID))
         {
            if(_loc1_ != "")
            {
               _loc3_ = new MText();
               _loc3_.fontSize = 12;
               _loc3_.width = 160;
               _loc3_.selectable = false;
               _loc3_.textColor = 16777215;
               _loc3_.text = "要塞保卫战：\r" + _loc1_;
               _loc2_.setSizeWH(160,_loc3_.textField.height);
               _loc2_.append(_loc3_);
            }
         }
         return _loc2_;
      }
      
      private static function getDesBox() : UIComponent
      {
         var _loc1_:String = null;
         var _loc4_:uint = 0;
         var _loc5_:int = 0;
         var _loc6_:MLabel = null;
         var _loc7_:int = 0;
         var _loc8_:Array = null;
         var _loc9_:Array = null;
         var _loc10_:Array = null;
         var _loc11_:String = null;
         var _loc12_:String = null;
         var _loc13_:Number = NaN;
         var _loc14_:String = null;
         var _loc15_:String = null;
         var _loc16_:* = null;
         var _loc17_:* = null;
         var _loc18_:String = null;
         var _loc19_:String = null;
         var _loc20_:String = null;
         var _loc2_:Canvas = new Canvas();
         _loc2_.cacheAsBitmap = true;
         var _loc3_:MText = getMText(12,10092288);
         if(_info.itemID < 100000 && _info.itemID > 10000)
         {
            _loc1_ = CountermarkXMLInfo.getEffectDes(_info.itemID);
            if((_loc4_ = CountermarkXMLInfo.getMonsterID(_info.itemID)) != 0)
            {
               _loc1_ += "\r限定：" + PetXMLInfo.getName(_loc4_);
            }
         }
         else if(_info.type == ItemType.GEM_ITEM)
         {
            _loc1_ = GemsXMLInfo.getEffect(_info.itemID);
         }
         else
         {
            if(_info.type != ItemType.GEM_ASSIST_ITEM)
            {
               (_loc6_ = new MLabel()).textField.selectable = true;
               _loc6_.textField.wordWrap = true;
               _loc6_.textField.autoSize = TextFieldAutoSize.LEFT;
               _loc6_.fontSize = 12;
               _loc6_.width = 160;
               _loc2_.layout = new FitSizeLayout();
               _loc7_ = 0;
               _loc8_ = [];
               _loc9_ = [];
               _loc10_ = [];
               _loc11_ = "";
               _loc12_ = "#99ff00";
               if(ItemSeXMLInfo.hasEffect(_info.itemID))
               {
                  _loc14_ = "";
                  _loc15_ = "<font color=\'#BEAB35\'>装扮等级:</font>" + ItemSeXMLInfo.getQualityHtmlStr(_info.itemID);
                  _loc16_ = "\r<font color=\'#FFFFFF\'>佩戴位置:" + ItemSeXMLInfo.getEquipPartName(_info.itemID) + "</font>";
                  _loc17_ = "\r<font color=\'#99ff00\'>装扮效果:</font>";
                  _loc18_ = "";
                  if((Boolean(_loc19_ = ItemSeXMLInfo.getItemDes(_info.itemID,_info.itemLevel))) && _loc19_.length > 0)
                  {
                     _loc17_ += "\r<font color=\'#99ff00\'>" + _loc19_ + "</font>";
                  }
                  else
                  {
                     _loc17_ += "<font color=\'#99ff00\'>无</font>";
                  }
                  _loc14_ = (_loc14_ = (_loc14_ += _loc15_) + _loc16_) + _loc17_;
                  _loc6_.text = _loc14_;
                  _loc6_.htmlText = _loc14_;
                  _loc13_ = Number(_loc6_.textField.height);
                  _loc6_.setSizeWH(160,_loc13_);
                  _loc2_.append(_loc6_);
                  _loc2_.setSizeWH(180,_loc13_);
                  return _loc2_;
               }
               if((_loc5_ = int(SuitXMLInfo.getIDForItem(_info.itemID))) > 0)
               {
                  return _loc2_;
               }
               if((_loc20_ = ItemTipXMLInfo.getItemDes(_info.itemID)).length == ItemSeXMLInfo.getseSuitDes(_info.itemID).length && _info.type == ItemType.SUIT)
               {
                  return _loc2_;
               }
               _loc3_.text = _loc20_;
               _loc2_.setSizeWH(160,_loc3_.textField.height);
               _loc2_.append(_loc3_);
               return _loc2_;
            }
            _loc1_ = "给相应的刻印宝石增加镶嵌或合成的概率。";
         }
         if(_loc1_ != "")
         {
            _loc2_.layout = new FitSizeLayout();
            if(_info.type == ItemType.GEM_ITEM)
            {
               _loc3_.text = "镶嵌进刻印后效果：\r" + _loc1_;
            }
            else
            {
               _loc3_.text = "用途：\r" + _loc1_;
            }
            _loc2_.setSizeWH(160,_loc3_.textField.height);
            _loc2_.append(_loc3_);
         }
         return _loc2_;
      }
      
      private static function getMText(param1:int, param2:uint) : MText
      {
         var _loc3_:MText = new MText();
         _loc3_.fontSize = param1;
         _loc3_.width = 160;
         _loc3_.selectable = false;
         _loc3_.textColor = param2;
         return _loc3_;
      }
      
      private static function getClothDesBox() : UIComponent
      {
         var _loc1_:String = null;
         var _loc3_:String = null;
         var _loc4_:int = 0;
         var _loc5_:Array = null;
         var _loc6_:* = null;
         var _loc7_:String = null;
         var _loc8_:Array = null;
         var _loc9_:MLabel = null;
         var _loc10_:int = 0;
         var _loc11_:String = null;
         var _loc12_:Number = NaN;
         var _loc2_:Canvas = new Canvas();
         _loc2_.cacheAsBitmap = true;
         lastSuitId = 0;
         if(_info.type == ItemType.CLOTH)
         {
            _loc3_ = "";
            _loc5_ = [];
            _loc6_ = "";
            _loc7_ = "#99ff00";
            _loc8_ = [];
            if(ItemSeXMLInfo.hasEffect(_info.itemID))
            {
               _loc4_ = ItemSeXMLInfo.getSuitId(_info.itemID);
            }
            else
            {
               _loc4_ = int(SuitXMLInfo.getIDForItem(_info.itemID));
            }
            lastSuitId = _loc4_;
            if(_loc4_ <= 0)
            {
               return _loc2_;
            }
            _loc5_ = SuitXMLInfo.getCloths(_loc4_);
            if(_loc4_ > 0)
            {
               (_loc9_ = new MLabel()).textField.selectable = true;
               _loc9_.textField.wordWrap = true;
               _loc9_.textField.autoSize = TextFieldAutoSize.LEFT;
               _loc9_.fontSize = 12;
               _loc9_.width = 160 + 80;
               _loc2_.layout = new FitSizeLayout();
               _loc6_ = "<font color=\'#BEAB35\'>" + SuitXMLInfo.getName(_loc4_) + "(包含以下)</font>";
               _loc10_ = 0;
               while(_loc10_ < _loc5_.length)
               {
                  _loc5_[_loc10_] = int(_loc5_[_loc10_]);
                  if(curPlayerClothes.indexOf(_loc5_[_loc10_]) < 0)
                  {
                     _loc8_.push(_loc5_[_loc10_]);
                  }
                  else
                  {
                     _loc8_.unshift(_loc5_[_loc10_]);
                  }
                  _loc10_++;
               }
               _loc11_ = "";
               _loc10_ = 0;
               while(_loc10_ < _loc8_.length)
               {
                  _loc7_ = "#99ff00";
                  if(curPlayerClothes.indexOf(_loc8_[_loc10_]) < 0)
                  {
                     _loc7_ = "#999999";
                  }
                  _loc11_ += "\r<font color=\'" + _loc7_ + "\'>" + ItemXMLInfo.getName(_loc8_[_loc10_]) + "</font>";
                  _loc10_++;
               }
               _loc6_ += _loc11_;
               _loc3_ += _loc6_;
               _loc9_.htmlText = _loc3_;
               _loc12_ = _loc9_.textField.height + 15;
               _loc9_.setSizeWH(180 + 80,_loc12_);
               _loc2_.append(_loc9_);
               _loc2_.setSizeWH(180 + 80,_loc12_);
            }
         }
         return _loc2_;
      }
      
      private static function checkClothSame() : Boolean
      {
         var _loc1_:int = 0;
         var _loc2_:int = 0;
         var _loc3_:int = 0;
         var _loc4_:int = 0;
         if(_info.type == ItemType.CLOTH)
         {
            if(curPlayerClothes != null)
            {
               _loc1_ = 0;
               while(_loc1_ < MainManager.actorInfo.clothes.length)
               {
                  _loc2_ = int(PeopleItemInfo(MainManager.actorInfo.clothes[_loc1_]).id);
                  if(curPlayerClothes.indexOf(_loc2_) < 0)
                  {
                     curPlayerClothes = [];
                     _loc3_ = 0;
                     while(_loc3_ < MainManager.actorInfo.clothes.length)
                     {
                        curPlayerClothes.push(PeopleItemInfo(MainManager.actorInfo.clothes[_loc3_]).id);
                        _loc3_++;
                     }
                     return false;
                  }
                  _loc1_++;
               }
               return true;
            }
            curPlayerClothes = [];
            _loc4_ = 0;
            while(_loc4_ < MainManager.actorInfo.clothes.length)
            {
               curPlayerClothes.push(PeopleItemInfo(MainManager.actorInfo.clothes[_loc4_]).id);
               _loc4_++;
            }
            return false;
         }
         return false;
      }
      
      private static function getSuitDesBox() : UIComponent
      {
         var _loc2_:MLabel = null;
         var _loc3_:String = null;
         var _loc4_:Number = NaN;
         var _loc1_:Canvas = new Canvas();
         _loc1_.cacheAsBitmap = true;
         if(_info.type == ItemType.SUIT || ItemSeXMLInfo.hasEffect(_info.itemID) && _info.type == ItemType.CLOTH)
         {
            _loc2_ = new MLabel();
            _loc2_.textField.selectable = true;
            _loc2_.textField.wordWrap = true;
            _loc2_.textField.autoSize = TextFieldAutoSize.LEFT;
            _loc2_.fontSize = 12;
            _loc2_.width = 160 + 80;
            _loc1_.layout = new FitSizeLayout();
            _loc2_.textColor = 10092288;
            if(_info.type == ItemType.CLOTH)
            {
               _loc3_ = ItemSeXMLInfo.getSuitDes(_info.itemID);
            }
            else
            {
               _loc3_ = ItemSeXMLInfo.getseSuitDes(_info.itemID);
            }
            if(!(_loc3_.length > 1 && _loc3_.length != ItemSeXMLInfo.getItemDes(_info.itemID,_info.itemLevel).length))
            {
               return _loc1_;
            }
            _loc2_.text = "套装效果:\n" + _loc3_;
            _loc4_ = _loc2_.textField.height + 18;
            _loc2_.setSizeWH(180 + 80,_loc4_);
            _loc1_.append(_loc2_);
            _loc1_.setSizeWH(180 + 80,_loc4_);
         }
         return _loc1_;
      }
   }
}
