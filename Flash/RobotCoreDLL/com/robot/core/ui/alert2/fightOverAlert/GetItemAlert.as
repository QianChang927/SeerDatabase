package com.robot.core.ui.alert2.fightOverAlert
{
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.ui.alert2.BaseFightOverAlert;
   import com.robot.core.ui.alert2.IFightOverAlert;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class GetItemAlert extends BaseFightOverAlert implements IFightOverAlert
   {
       
      
      private var panel:MovieClip;
      
      private var okBtn:SimpleButton;
      
      private var itemArr:Array;
      
      public function GetItemAlert()
      {
         this.itemArr = [];
         super();
         this.panel = UIManager.getMovieClip("ui_Get_Item_Panel");
         this.okBtn = this.panel["okBtn"];
         this.okBtn.addEventListener(MouseEvent.CLICK,this.closePanel);
      }
      
      private function closePanel(param1:MouseEvent) : void
      {
         this.close();
      }
      
      override public function setup(param1:Object = null) : void
      {
         var _loc3_:uint = 0;
         var _loc4_:SingleItemMC = null;
         var _loc5_:Object = null;
         var _loc2_:Array = param1 as Array;
         for each(_loc5_ in _loc2_)
         {
            (_loc4_ = new SingleItemMC(_loc5_.id,_loc5_.cnt)).x = 30;
            _loc4_.y = 55 + (55 + 4) * _loc3_;
            this.itemArr.push(_loc4_);
            this.panel.addChild(_loc4_);
            _loc3_++;
         }
         if(_loc3_ > 1)
         {
            this.panel["bgMC_2"].height = _loc4_.y + 55 + 2 + 60 - 37;
            this.panel["bgMC_1"].height = this.panel["bgMC_2"].y + this.panel["bgMC_2"].height + 10;
            this.panel["okBtn"].y = this.panel["bgMC_1"].height - 56;
         }
         else
         {
            this.panel["okBtn"].y = 129;
            this.panel["bgMC_1"].height = 183;
            this.panel["bgMC_2"].height = 140;
         }
      }
      
      override public function show() : void
      {
         DisplayUtil.align(this.panel,null,AlignType.MIDDLE_CENTER);
         LevelManager.appLevel.addChild(this.panel);
      }
      
      override public function close() : void
      {
         super.close();
         DisplayUtil.removeForParent(this.panel);
         this.itemArr.forEach(function(param1:SingleItemMC, param2:int, param3:Array):void
         {
            param1.destroy();
         });
         this.itemArr = [];
         this.okBtn.removeEventListener(MouseEvent.CLICK,this.closePanel);
         this.panel = null;
         this.okBtn = null;
      }
   }
}

import com.robot.core.config.xml.ItemXMLInfo;
import com.robot.core.manager.UIManager;
import flash.display.DisplayObject;
import flash.display.MovieClip;
import flash.display.Sprite;
import org.taomee.manager.ResourceManager;
import org.taomee.utils.DisplayUtil;

class SingleItemMC extends Sprite
{
    
   
   private var mc:MovieClip;
   
   public function SingleItemMC(param1:uint, param2:uint)
   {
      super();
      this.mc = UIManager.getMovieClip("ui_GetItem_itemMC");
      addChild(this.mc);
      ResourceManager.getResource(ItemXMLInfo.getIconURL(param1),this.onLoadIcon);
      this.mc["numTxt"].text = param2.toString();
      if(param1 < 500000)
      {
         this.mc["infoTxt"].htmlText = "<font color=\'#ffff00\'>" + ItemXMLInfo.getName(param1) + "</font>放入了储存箱";
      }
      else
      {
         this.mc["infoTxt"].htmlText = "<font color=\'#ffff00\'>" + ItemXMLInfo.getName(param1) + "</font>放入了基地仓库";
      }
   }
   
   private function onLoadIcon(param1:DisplayObject) : void
   {
      param1.scaleX = param1.scaleY = 0.8;
      param1.x = 6;
      param1.y = 4;
      this.mc.addChild(param1);
   }
   
   public function destroy() : void
   {
      DisplayUtil.removeForParent(this);
      this.mc = null;
   }
}
