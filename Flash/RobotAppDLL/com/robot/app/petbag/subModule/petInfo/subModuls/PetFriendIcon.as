package com.robot.module.app.petBag.subModule.petInfo.subModuls
{
   import com.robot.core.config.xml.PetFriendsXMLInfo;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.PetManager;
   import com.robot.module.app.PetBag2017;
   import com.robot.module.app.petBag.PetBagSubModule;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.effect.ColorFilter;
   
   public class PetFriendIcon extends PetBagSubModule
   {
       
      
      private const HEAD_RECT_WIDTH:int = 44;
      
      private const HEAD_RECT_HEIGHT:int = 64;
      
      private const UP_DOWN_PAD:int = 10;
      
      private const LEFT_RIGHT_PAD:int = 10;
      
      private const COL_MAX:int = 2;
      
      private const ROW_MAX:int = 4;
      
      private var _info:PetInfo;
      
      private var _heads:Array;
      
      private var _activeList:Array;
      
      public function PetFriendIcon(ui:MovieClip)
      {
         _ui = ui;
         _ui.visible = false;
         _ui["friendBtn"].buttonMode = true;
         _ui.addEventListener(MouseEvent.ROLL_OVER,this.onOver);
         _ui.addEventListener(MouseEvent.ROLL_OUT,this.onOut);
         _ui.gotoAndStop(1);
         super();
      }
      
      protected function onOut(event:MouseEvent) : void
      {
         this.hide();
      }
      
      protected function onOver(event:MouseEvent) : void
      {
         _ui.gotoAndStop(2);
         this.show();
      }
      
      public function set petInfo(value:PetInfo) : void
      {
         if(value == null)
         {
            return;
         }
         this._info = value;
         this._activeList = PetFriendsXMLInfo.getFriendPetIDs(this._info.id);
         _ui.visible = Boolean(this._activeList.length > 0);
         _ui["friendBtn"].filters = this.haveActiveFriendPet ? null : [ColorFilter.setGrayscale()];
      }
      
      private function get haveActiveFriendPet() : Boolean
      {
         var pid:int = 0;
         for each(pid in this._activeList)
         {
            if(PetManager.isFriendActivate(this._info.id,pid))
            {
               return true;
            }
         }
         return false;
      }
      
      private function show() : void
      {
         var pid:int = 0;
         var con:MovieClip = null;
         var head:PetFriendHeadView = null;
         this.clearHeads();
         for each(pid in this._activeList)
         {
            con = PetBag2017.instance.getSymbolFromLib("friendHeadUI");
            _ui.addChild(con);
            head = new PetFriendHeadView(con,pid);
            head.isGrey = !PetManager.isFriendActivate(this._info.id,pid);
            this._heads.push(head);
         }
         this.layout();
      }
      
      override protected function onFocusPetChange() : void
      {
         this.petInfo = focusPet;
      }
      
      private function layout() : void
      {
         var row:int = 0;
         var col:int = 0;
         for(var i:int = 0; i < this._heads.length; i++)
         {
            col = int(i / this.COL_MAX);
            row = i % this.COL_MAX;
            this._heads[i].setPos(_ui["bg"].x + this.LEFT_RIGHT_PAD * (this.COL_MAX - col + 1) + this.HEAD_RECT_WIDTH * (this.COL_MAX - col),_ui["bg"].y + this.UP_DOWN_PAD * (row + 1) + this.HEAD_RECT_HEIGHT * row);
         }
         var colMax:int = Math.ceil(this._heads.length / this.COL_MAX);
         var rowMax:int = this._heads.length > this.COL_MAX ? this.COL_MAX : int(this._heads.length);
      }
      
      private function clearHeads() : void
      {
         var pet:PetFriendHeadView = null;
         for each(pet in this._heads)
         {
            pet.destroy();
         }
         this._heads = [];
      }
      
      public function hide() : void
      {
         this.clearHeads();
         _ui.gotoAndStop(1);
      }
      
      public function destroy() : void
      {
         if(Boolean(this._heads))
         {
            this.clearHeads();
         }
         if(Boolean(_ui))
         {
            _ui.removeEventListener(MouseEvent.ROLL_OVER,this.onOver);
            _ui.removeEventListener(MouseEvent.ROLL_OUT,this.onOut);
         }
         _ui = null;
         this._info = null;
         this._heads = null;
         this._activeList = null;
         super.destory();
      }
   }
}

import com.robot.app.task.petstory.util.KTool;
import com.robot.core.config.ClientConfig;
import com.robot.core.config.xml.PetXMLInfo;
import flash.display.MovieClip;
import org.taomee.effect.ColorFilter;
import org.taomee.manager.ResourceManager;
import org.taomee.utils.DisplayUtil;

class PetFriendHeadView
{
    
   
   private const HEAD_RECT_WIDTH:int = 44;
   
   private const HEAD_RECT_HEIGHT:int = 64;
   
   private var _con:MovieClip;
   
   private var _ui:MovieClip;
   
   private var _pet:int;
   
   public function PetFriendHeadView(con:MovieClip, pet:int)
   {
      super();
      this._con = con;
      this._pet = pet;
      this.loadPet();
   }
   
   private function loadPet() : void
   {
      ResourceManager.getResource(ClientConfig.getPetHeadPath(this._pet),function(head:MovieClip):void
      {
         KTool.scaleByRect(head,HEAD_RECT_WIDTH,HEAD_RECT_WIDTH);
         _con["headCon"]["head"].addChild(head);
      });
      this._con.petName.text = PetXMLInfo.getName(this._pet);
   }
   
   public function set isGrey(value:Boolean) : void
   {
      this._con["headCon"].filters = value ? [ColorFilter.setGrayscale()] : null;
      this._con["flag"].visible = !value;
   }
   
   public function setPos(x:Number, y:Number) : void
   {
      this._con.x = x;
      this._con.y = y;
   }
   
   public function destroy() : void
   {
      ResourceManager.cancelURL(ClientConfig.getPetHeadPath(this._pet));
      if(Boolean(this._con["headCon"]) && Boolean(this._con["headCon"]["head"]))
      {
         DisplayUtil.removeAllChild(this._con["headCon"]["head"]);
      }
      DisplayUtil.removeForParent(this._con);
      this._con = null;
      this._ui = null;
   }
}
