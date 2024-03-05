package com.robot.core.event
{
   import flash.events.Event;
   
   public class CountermarkEvent extends Event
   {
      
      public static const GRID_CLICK:String = "gridClick";
      
      public static const GRID_DOUBLE_CLICK:String = "gridDoubleClick";
      
      public static const GRID_OVER:String = "gridOver";
      
      public static const GRID_OUT:String = "gridOut";
      
      public static const GRID_DRAG_BEGIN:String = "gridDragBegin";
      
      public static const GRID_DRAG_END:String = "gridDragEnd";
      
      public static const GRID_GEM_CLICK:String = "gridGemClick";
      
      public static const HOLE_CLICK:String = "holeClick";
      
      public static const PANEL_CLOSE:String = "panelClose";
      
      public static const MENU_STRENTHEN:String = "menuStrengthen";
      
      public static const MENU_DECOMPOSE:String = "menuDecompose";
      
      public static const MENU_STORAGE:String = "menuStorage";
      
      public static const MENU_BAG:String = "menuBag";
      
      public static const EQUIP_ON:String = "equipOn";
      
      public static const EQUIP_FAIL:String = "equipFail";
      
      public static const SKILL_SELECT:String = "skillSelected";
      
      public static const SKILL_CANCEL:String = "skillCancel";
      
      public static const EQUIP_OFF:String = "equipOff";
      
      public static const EQUIP_PETINFO_UPDATE:String = "equipPetInfoUpdate";
      
      public static const EQUIP_PET_SWITCH:String = "equipPetSwitch";
      
      public static const UPGRADE_END:String = "upgradeEnd";
      
      public static const UPGRADE_SAVE:String = "upgradeSave";
      
      public static const INLAY_END:String = "inlayEnd";
      
      public static const GEM_MAKE_END:String = "gemMakeEnd";
      
      public static const REFORGE_END:String = "reforegeEnd";
      
      public static const STORAGE_DECOMPOSE:String = "storageDecompose";
      
      public static const MOVE_END:String = "moveEnd";
      
      public static const GEM_NUM_CHOOSE:String = "gemNumChoose";
      
      public static const DECOMPOSE_END:String = "decomposeEnd";
      
      public static const PICK_UP_TO_BAG:String = "picktoBag";
       
      
      private var _info:Object;
      
      public function CountermarkEvent(param1:String, param2:Object)
      {
         this._info = param2;
         super(param1,false,false);
      }
      
      public function get info() : Object
      {
         return this._info;
      }
   }
}
